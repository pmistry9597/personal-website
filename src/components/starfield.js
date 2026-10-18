import { useEffect } from 'react';

export default function Starfield() {
  useEffect(() => {
    const count = 40;
    const stars = [];

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'twinkle-star';
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty('--dur', `${Math.random() * 4 + 2}s`);
      star.style.animationDelay = `${Math.random() * 4}s`;
      document.body.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach((s) => s.remove());
    };
  }, []);

  return null;
}