import { useEffect, useRef, useState, useCallback } from 'react';

const ORB_COUNT = 3;
const ORB_RADIUS_RATIO = 0.12;
const ORBIT_RADIUS_RATIO = 0.3;
const ORBIT_SPEED = 0.35;
const CYCLE_DURATION = 14000; // fixed 14s cycle

const PHASE = {
  orbitEnd: 0.55,      // 0.00 - 0.55 (7.7s)
  convergeEnd: 0.65,   // 0.55 - 0.65 (1.4s)
  fuseEnd: 0.90,       // 0.65 - 0.90 (3.5s)
  divergeEnd: 1.00,    // 0.90 - 1.00 (1.4s)
};

const ORB_COLORS = ['#22d3ee', '#d946ef', '#8b5cf6'];

const POLYGONS = {
  triangle: 3,
  square: 4,
  pentagon: 5,
  hexagon: 6,
  star: 10,
};

function getPolygonVertices(sides, radius, rotation = 0) {
  const vertices = [];
  const isStar = sides === 10;
  const points = isStar ? 5 : sides;
  const angleStep = (Math.PI * 2) / points;

  for (let i = 0; i < points; i++) {
    const angle = i * angleStep - Math.PI / 2 + rotation;
    const r = isStar && i % 2 === 1 ? radius * 0.45 : radius;
    vertices.push({ x: Math.cos(angle) * r, y: Math.sin(angle) * r });
  }
  return vertices;
}

function lerp(a, b, t) { return a + (b - a) * t; }

function lerpVertices(from, to, t) {
  const len = Math.max(from.length, to.length);
  const result = [];
  for (let i = 0; i < len; i++) {
    const f = from[i % from.length];
    const t2 = to[i % to.length];
    result.push({ x: lerp(f.x, t2.x, t), y: lerp(f.y, t2.y, t) });
  }
  return result;
}

function drawPolygon(ctx, vertices, fillStyle, strokeStyle, lineWidth) {
  if (vertices.length < 3) return;
  ctx.beginPath();
  ctx.moveTo(vertices[0].x, vertices[0].y);
  for (let i = 1; i < vertices.length; i++) ctx.lineTo(vertices[i].x, vertices[i].y);
  ctx.closePath();
  if (fillStyle) { ctx.fillStyle = fillStyle; ctx.fill(); }
  if (strokeStyle) { ctx.strokeStyle = strokeStyle; ctx.lineWidth = lineWidth; ctx.stroke(); }
}

function lightenColor(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, (num >> 16) + 255 * amount);
  const g = Math.min(255, ((num >> 8) & 0xFF) + 255 * amount);
  const b = Math.min(255, (num & 0xFF) + 255 * amount);
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

function darkenColor(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, (num >> 16) - 255 * amount);
  const g = Math.max(0, ((num >> 8) & 0xFF) - 255 * amount);
  const b = Math.max(0, (num & 0xFF) - 255 * amount);
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

// Bouncy easing functions
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutElastic(t) {
  if (t === 0 || t === 1) return t;
  return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function clamp(v, min = 0, max = 1) { return Math.max(min, Math.min(max, v)); }

export default function OrbitalArt({ size = 320 }) {
  const canvasRef = useRef(null);
  const offscreenRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Continuous cycle state
  const cycleProgressRef = useRef(0);
  const targetCycleProgressRef = useRef(null);
  const isSeekingRef = useRef(false);
  const lastCycleIndexRef = useRef(-1);
  const fusionTypeRef = useRef('geometric');
  const targetPolygonRef = useRef('hexagon');
  const triangleVerticesRef = useRef([]);
  const targetVerticesRef = useRef([]);
  const shapeRotationRef = useRef(0);
  const nebulaRotationRef = useRef(0);
  const nebulaScaleRef = useRef(1);

  // Orbs
  const orbsRef = useRef([]);
  const orbAnglesRef = useRef([]);

  // Initialize orbs
  const initOrbs = useCallback((canvasRadius) => {
    const orbitRadius = canvasRadius * ORBIT_RADIUS_RATIO;
    const orbRadius = canvasRadius * ORB_RADIUS_RATIO;
    orbsRef.current = [];
    orbAnglesRef.current = [];
    for (let i = 0; i < ORB_COUNT; i++) {
      const angle = (i / ORB_COUNT) * Math.PI * 2 - Math.PI / 2;
      orbAnglesRef.current[i] = angle;
      orbsRef.current[i] = {
        angle,
        orbitR: orbitRadius,
        orbR: orbRadius,
      };
    }
    // Precompute triangle vertices for fusion
    triangleVerticesRef.current = getPolygonVertices(3, canvasRadius * 0.35);
  }, []);

  // Pick random fusion for new cycle
  const pickNewFusion = useCallback((canvasRadius) => {
    const isOrganic = Math.random() < 0.5;
    fusionTypeRef.current = isOrganic ? 'organic' : 'geometric';
    if (!isOrganic) {
      const shapes = Object.keys(POLYGONS).filter(k => k !== 'triangle');
      targetPolygonRef.current = shapes[Math.floor(Math.random() * shapes.length)];
      const sides = POLYGONS[targetPolygonRef.current];
      targetVerticesRef.current = getPolygonVertices(sides, canvasRadius * 0.35);
    }
  }, []);

  // Smooth seek to next phase boundary
  const handleClick = useCallback(() => {
    if (prefersReducedMotion) return;
    const cp = cycleProgressRef.current;
    const boundaries = [PHASE.orbitEnd, PHASE.convergeEnd, PHASE.fuseEnd, PHASE.divergeEnd];
    const nextBoundary = boundaries.find(b => b > cp) || 1.0;
    targetCycleProgressRef.current = nextBoundary;
    isSeekingRef.current = true;
  }, [prefersReducedMotion]);

  // Reduced motion handler
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Resize handler
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;
    const dpr = window.devicePixelRatio || 1;
    const displaySize = Math.min(container.clientWidth, size);
    canvas.style.width = `${displaySize}px`;
    canvas.style.height = `${displaySize}px`;
    canvas.width = displaySize * dpr;
    canvas.height = displaySize * dpr;
    const offscreen = offscreenRef.current;
    if (offscreen) {
      offscreen.width = displaySize * dpr * 0.5;
      offscreen.height = displaySize * dpr * 0.5;
    }
    const canvasRadius = Math.min(canvas.width, canvas.height) / 2 / dpr;
    initOrbs(canvasRadius);
  }, [size, initOrbs]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const offscreen = offscreenRef.current;
    let frameId;

    const animate = (time) => {
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const canvasRadius = Math.min(canvas.width, canvas.height) / 2;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const dpr = window.devicePixelRatio || 1;

      // --- Continuous cycle progress ---
      const rawCycleProgress = (time % CYCLE_DURATION) / CYCLE_DURATION;
      const cycleIndex = Math.floor(time / CYCLE_DURATION);

      // Pick new fusion at cycle boundary
      if (cycleIndex !== lastCycleIndexRef.current) {
        pickNewFusion(canvasRadius);
        lastCycleIndexRef.current = cycleIndex;
      }

      // Smooth seek on click
      let cycleProgress = rawCycleProgress;
      if (isSeekingRef.current && targetCycleProgressRef.current !== null) {
        const target = targetCycleProgressRef.current;
        cycleProgress = lerp(cycleProgress, target, 0.15);
        if (Math.abs(cycleProgress - target) < 0.001) {
          cycleProgress = target;
          isSeekingRef.current = false;
          targetCycleProgressRef.current = null;
        }
      }
      cycleProgressRef.current = cycleProgress;

      // --- Phase progress (0-1 within each phase) ---
      const convergeT = easeInOutCubic(clamp((cycleProgress - PHASE.orbitEnd) / (PHASE.convergeEnd - PHASE.orbitEnd)));
      const fuseT = easeOutElastic(clamp((cycleProgress - PHASE.convergeEnd) / (PHASE.fuseEnd - PHASE.convergeEnd)));
      const divergeT = easeOutCubic(clamp((cycleProgress - PHASE.fuseEnd) / (PHASE.divergeEnd - PHASE.fuseEnd)));

      // --- Clear ---
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Nebula background ---
      drawNebula(ctx, centerX, centerY, canvasRadius, time);

      if (prefersReducedMotion) {
        // Static fused triangle
        const vertices = getPolygonVertices(3, canvasRadius * 0.35);
        const pulse = 0.6 + 0.4 * Math.sin(time / 2000);
        ctx.globalAlpha = pulse;
        drawPolygon(ctx, vertices, ORB_COLORS[0], ORB_COLORS[1], 2 / dpr);
        ctx.globalAlpha = 1;
      } else {
        // --- Update orbs ---
        updateOrbs(dt, canvasRadius, convergeT, divergeT);

        // --- Draw orbs (visible during orbit, converge, diverge) ---
        const showOrbs = cycleProgress < PHASE.fuseEnd || cycleProgress >= PHASE.divergeEnd;
        if (showOrbs) {
          drawOrbs(ctx, centerX, centerY, dpr, convergeT, divergeT);
        }

        // --- Draw fusion shape (visible during fuse, diverge) ---
        const showFusion = cycleProgress >= PHASE.convergeEnd;
        if (showFusion) {
          drawFusion(ctx, centerX, centerY, dpr, time, fuseT, divergeT, canvasRadius);
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    lastTimeRef.current = performance.now();
    frameId = requestAnimationFrame(animate);
    return () => { if (frameId) cancelAnimationFrame(frameId); };
  }, [prefersReducedMotion, pickNewFusion]);

  function drawNebula(ctx, cx, cy, radius, time) {
    ctx.save();
    ctx.translate(cx, cy);
    nebulaRotationRef.current += 0.00002;
    ctx.rotate(nebulaRotationRef.current);
    nebulaScaleRef.current = 1 + 0.15 * Math.sin(time / 8000);
    ctx.scale(nebulaScaleRef.current, nebulaScaleRef.current);
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 1.2);
    gradient.addColorStop(0, 'rgba(34, 211, 238, 0.03)');
    gradient.addColorStop(0.4, 'rgba(217, 70, 239, 0.02)');
    gradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.025)');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, radius * 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function updateOrbs(dt, canvasRadius, convergeT, divergeT) {
    const orbitRadius = canvasRadius * ORBIT_RADIUS_RATIO;
    const orbRadius = canvasRadius * ORB_RADIUS_RATIO;

    for (let i = 0; i < ORB_COUNT; i++) {
      const orb = orbsRef.current[i];
      const baseAngle = orbAnglesRef.current[i];

      // Continuous orbital motion
      orb.angle += ORBIT_SPEED * dt;
      orbAnglesRef.current[i] = orb.angle;

      // Orbit position (where the orb would be in pure orbit)
      const orbitX = Math.cos(orb.angle) * orbitRadius;
      const orbitY = Math.sin(orb.angle) * orbitRadius;

      // Converge: orbit → center
      const convergeX = lerp(orbitX, 0, convergeT);
      const convergeY = lerp(orbitY, 0, convergeT);
      const convergeR = lerp(orbRadius, orbRadius * 0.3, convergeT);
      const convergeAlpha = 1 - convergeT * 0.8;

      // Diverge: center → orbit
      const divergeX = lerp(0, orbitX, divergeT);
      const divergeY = lerp(0, orbitY, divergeT);
      const divergeR = lerp(orbRadius * 0.3, orbRadius, divergeT);
      const divergeAlpha = easeOutCubic(divergeT);

      // Combined position
      if (convergeT > 0 && divergeT === 0) {
        // Converging phase
        orb.x = convergeX;
        orb.y = convergeY;
        orb.r = convergeR;
        orb.alpha = convergeAlpha;
      } else if (divergeT > 0) {
        // Diverging phase (overrides converge)
        orb.x = divergeX;
        orb.y = divergeY;
        orb.r = divergeR;
        orb.alpha = divergeAlpha;
      } else {
        // Pure orbit
        orb.x = orbitX;
        orb.y = orbitY;
        orb.r = orbRadius;
        orb.alpha = 1;
      }
    }
  }

  function drawOrbs(ctx, cx, cy, dpr, convergeT, divergeT) {
    ctx.save();
    ctx.translate(cx, cy);

    orbsRef.current.forEach((orb, i) => {
      if (orb.alpha <= 0 || orb.r <= 0) return;

      ctx.globalAlpha = orb.alpha;
      const color = ORB_COLORS[i];

      // Outer glow
      const glow = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r * 2.5);
      glow.addColorStop(0, color + '40');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.r * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Main orb
      const gradient = ctx.createRadialGradient(
        orb.x - orb.r * 0.3, orb.y - orb.r * 0.3, 0,
        orb.x, orb.y, orb.r
      );
      gradient.addColorStop(0, lightenColor(color, 0.4));
      gradient.addColorStop(0.5, color);
      gradient.addColorStop(1, darkenColor(color, 0.3));
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
      ctx.fill();

      // Specular highlight
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath();
      ctx.arc(orb.x - orb.r * 0.3, orb.y - orb.r * 0.3, orb.r * 0.25, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    ctx.restore();
  }

  function drawFusion(ctx, cx, cy, dpr, time, fuseT, divergeT, canvasRadius) {
    ctx.save();
    ctx.translate(cx, cy);

    // Fade in during fuse, fade out during diverge
    const alpha = fuseT * (1 - divergeT);
    if (alpha <= 0) { ctx.restore(); return; }
    ctx.globalAlpha = alpha;

    // Rotate shape
    shapeRotationRef.current += 0.15 * (time - lastTimeRef.current) / 1000;
    ctx.rotate(shapeRotationRef.current);

    // Pulse
    const pulse = 1 + 0.08 * Math.sin(time / 500);
    ctx.scale(pulse, pulse);

    if (divergeT > 0) {
      // UNMERGE PHASE: shape actively splits into orbs
      if (fusionTypeRef.current === 'organic') {
        drawOrganicUnmerge(ctx, dpr, divergeT, canvasRadius);
      } else {
        drawGeometricUnmerge(ctx, dpr, divergeT, canvasRadius);
      }
    } else {
      // Normal fuse phase
      if (fusionTypeRef.current === 'organic') {
        drawOrganicFusion(ctx, dpr);
      } else {
        drawGeometricFusion(ctx, dpr, fuseT);
      }
    }

    ctx.globalAlpha = 1;
    ctx.restore();
  }

  function drawOrganicFusion(ctx, dpr) {
    const offscreen = offscreenRef.current;
    const offCtx = offscreen?.getContext('2d');
    if (!offscreen || !offCtx) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    
    const displayW = canvas.width / dpr;
    const displayH = canvas.height / dpr;
    const offW = offscreen.width;
    const offH = offscreen.height;

    offCtx.setTransform(1, 0, 0, 1, 0, 0);
    offCtx.clearRect(0, 0, offW, offH);

    const orbR = (displayW * ORB_RADIUS_RATIO) * (offW / displayW);
    offCtx.globalCompositeOperation = 'lighter';

    // Draw 3 overlapping circles at center for metaball
    for (let i = 0; i < 3; i++) {
      const gradient = offCtx.createRadialGradient(offW/2, offH/2, 0, offW/2, offH/2, orbR * 1.8);
      gradient.addColorStop(0, 'white');
      gradient.addColorStop(1, 'transparent');
      offCtx.fillStyle = gradient;
      offCtx.beginPath();
      offCtx.arc(offW/2, offH/2, orbR * 1.8, 0, Math.PI * 2);
      offCtx.fill();
    }

    offCtx.filter = 'contrast(12) brightness(1.2)';
    ctx.drawImage(offscreen, -displayW/2, -displayH/2, displayW, displayH);

    ctx.globalCompositeOperation = 'source-atop';
    const colorGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, displayW * 0.4);
    colorGradient.addColorStop(0, ORB_COLORS[0]);
    colorGradient.addColorStop(0.5, ORB_COLORS[1]);
    colorGradient.addColorStop(1, ORB_COLORS[2]);
    ctx.fillStyle = colorGradient;
    ctx.fillRect(-displayW/2, -displayH/2, displayW, displayH);

    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = ORB_COLORS[0];
    ctx.lineWidth = 2 / dpr;
    ctx.strokeRect(-displayW/2, -displayH/2, displayW, displayH);
  }

  function drawGeometricFusion(ctx, dpr, fuseT) {
    // Morph from triangle to target polygon
    const currentVertices = lerpVertices(triangleVerticesRef.current, targetVerticesRef.current, fuseT);

    const canvas = canvasRef.current;
    const radius = canvas ? Math.min(canvas.width, canvas.height) * 0.35 : 100;
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
    gradient.addColorStop(0, ORB_COLORS[0] + 'CC');
    gradient.addColorStop(0.5, ORB_COLORS[1] + 'AA');
    gradient.addColorStop(1, ORB_COLORS[2] + '88');

    drawPolygon(ctx, currentVertices, gradient, ORB_COLORS[0], 2.5 / dpr);

    // Inner highlight
    const innerVertices = currentVertices.map(v => ({ x: v.x * 0.6, y: v.y * 0.6 }));
    drawPolygon(ctx, innerVertices, null, 'rgba(255,255,255,0.2)', 1 / dpr);
  }

  // UNMERGE: Geometric - polygon vertices stretch toward 3 orb positions
  function drawGeometricUnmerge(ctx, dpr, divergeT, canvasRadius) {
    const orbitRadius = canvasRadius * ORBIT_RADIUS_RATIO;
    
    // 3 target positions at current orb angles
    const targets = orbAnglesRef.current.map(angle => ({
      x: Math.cos(angle) * orbitRadius * 0.9,
      y: Math.sin(angle) * orbitRadius * 0.9,
    }));

    // Get current fused shape vertices (end of fuse phase)
    const fusedVertices = targetVerticesRef.current;

    // Each vertex pulls toward its assigned orb target
    const pullStrength = divergeT * 1.8; // overshoot for snappy feel
    const unmergeVertices = fusedVertices.map((v, i) => {
      const target = targets[i % 3];
      return {
        x: lerp(v.x, target.x, pullStrength),
        y: lerp(v.y, target.y, pullStrength),
      };
    });

    // Fade out shape as orbs fade in
    ctx.globalAlpha = 1 - divergeT;

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, canvasRadius * 0.5);
    gradient.addColorStop(0, ORB_COLORS[0] + 'CC');
    gradient.addColorStop(0.5, ORB_COLORS[1] + 'AA');
    gradient.addColorStop(1, ORB_COLORS[2] + '88');

    drawPolygon(ctx, unmergeVertices, gradient, ORB_COLORS[0], 2.5 / dpr);

    // Inner highlight fading
    const innerVertices = unmergeVertices.map(v => ({ x: v.x * 0.6, y: v.y * 0.6 }));
    drawPolygon(ctx, innerVertices, null, 'rgba(255,255,255,' + (0.2 * (1 - divergeT)) + ')', 1 / dpr);
  }

  // UNMERGE: Organic - metaball splits into 3 distinct colored lobes (direct render, no flash)
  function drawOrganicUnmerge(ctx, dpr, divergeT, canvasRadius) {
    const orbitRadius = canvasRadius * ORBIT_RADIUS_RATIO;
    const orbR = canvasRadius * ORB_RADIUS_RATIO;

    // Fade out the splitting shape
    ctx.globalAlpha = 1 - divergeT;

    // Draw 3 colored metaballs directly at diverging positions
    orbAnglesRef.current.forEach((angle, i) => {
      const dist = orbitRadius * divergeT * 1.3;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      const r = orbR * (1.8 - divergeT * 0.8);

      // Each orb gets its color with radial gradient (matching fused style)
      const color = ORB_COLORS[i];
      const gradient = ctx.createRadialGradient(tx, ty, 0, tx, ty, r);
      gradient.addColorStop(0, lightenColor(color, 0.5));
      gradient.addColorStop(0.5, color);
      gradient.addColorStop(1, darkenColor(color, 0.4));
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(tx, ty, r, 0, Math.PI * 2);
      ctx.fill();

      // Specular highlight
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath();
      ctx.arc(tx - r * 0.3, ty - r * 0.3, r * 0.25, 0, Math.PI * 2);
      ctx.fill();
    });

    // Outer stroke on the splitting form
    ctx.strokeStyle = ORB_COLORS[0];
    ctx.lineWidth = 2 / dpr;
    // Draw triangle connecting the 3 separating centers
    ctx.beginPath();
    const pts = orbAnglesRef.current.map(a => ({
      x: Math.cos(a) * orbitRadius * divergeT * 1.3,
      y: Math.sin(a) * orbitRadius * divergeT * 1.3,
    }));
    ctx.moveTo(pts[0].x, pts[0].y);
    ctx.lineTo(pts[1].x, pts[1].y);
    ctx.lineTo(pts[2].x, pts[2].y);
    ctx.closePath();
    ctx.stroke();
  }

  return (
    <div
      style={{ 
        width: '100%', maxWidth: size, aspectRatio: '1 / 1', margin: '0 auto', cursor: 'pointer',
        padding: "20px",
      }}
      role="img"
      aria-label="Orbital fusion animation: three orbs orbit, merge into geometric or organic shapes, and separate again"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); } }}
    >
      <canvas ref={canvasRef} style={{ width: '90%', height: '90%', display: 'block' }} aria-hidden="true" />
      <canvas ref={offscreenRef} style={{ display: 'none' }} aria-hidden="true" />
    </div>
  );
}
