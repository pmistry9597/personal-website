import { useMemo } from 'react';

const STAR_COUNT = 40;

export default function Starfield() {
  const stars = useMemo(() => {
    return Array.from({ length: STAR_COUNT }, (_, i) => {
      // Deterministic positions — identical on server and client (no Math.random)
      const size = (i % 3) + 1;
      return (
        <div
          key={i}
          className="twinkle-star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${(i * 23) % 100}%`,
            top: `${(i * 17) % 100}%`,
            '--dur': `${(i % 4) + 2}s`,
            animationDelay: `${(i % 5) * 0.8}s`,
          }}
        />
      );
    });
  }, []);

  return (
    <div
      className="starfield"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      {stars}
    </div>
  );
}