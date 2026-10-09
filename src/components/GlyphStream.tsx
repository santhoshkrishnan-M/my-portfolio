import React, { useEffect, useRef } from 'react';

const GLYPHS = ['01', '0x', 'SF', 'SEC', 'CY', '42', 'λ', '◈', '∆', '∑', '★', '⚡', '⚙', '⌘', '[ ]', '#', '0F', '89'];

interface GlyphTile {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  char: string;
  rotation: number;
  vRot: number;
  opacity: number;
  age: number;
  life: number;
  color: string;
  isSplash?: boolean;
}

export const GlyphStream: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, prevX: width / 2, prevY: height / 2, speed: 0 };
    let tiles: GlyphTile[] = [];
    let animationFrameId: number;
    let emitCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      mouse.speed = Math.hypot(dx, dy);

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      emitCounter += mouse.speed;

      // Emit glyph tile stream as cursor moves
      if (emitCounter > 12) {
        emitCounter = 0;
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const color = Math.random() > 0.35 ? '#00E5FF' : Math.random() > 0.5 ? '#2563FF' : '#8B5CF6';
        
        tiles.push({
          x: mouse.x + (Math.random() - 0.5) * 10,
          y: mouse.y + (Math.random() - 0.5) * 10,
          vx: -dx * 0.12 + (Math.random() - 0.5) * 1.5,
          vy: -dy * 0.12 + (Math.random() - 0.5) * 1.5 + 0.8, // slight fluid downward pour
          size: Math.floor(Math.random() * 8) + 20,
          char,
          rotation: (Math.random() - 0.5) * 0.4,
          vRot: (Math.random() - 0.5) * 0.08,
          opacity: 1,
          age: 0,
          life: 30 + Math.floor(Math.random() * 25),
          color
        });
      }
    };

    // Glyph Splash effect on click!
    const handleClick = (e: MouseEvent) => {
      const splashCount = 20;
      for (let i = 0; i < splashCount; i++) {
        const angle = (i / splashCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
        const speed = Math.random() * 8 + 3;
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const color = Math.random() > 0.4 ? '#00E5FF' : '#2563FF';

        tiles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.floor(Math.random() * 10) + 24,
          char,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.2,
          opacity: 1,
          age: 0,
          life: 45 + Math.floor(Math.random() * 20),
          color,
          isSplash: true
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion) {
        for (let i = tiles.length - 1; i >= 0; i--) {
          const t = tiles[i];
          t.x += t.vx;
          t.y += t.vy;
          t.rotation += t.vRot;
          t.age += 1;

          // Drag / gravity effect
          t.vx *= 0.94;
          t.vy *= 0.94;
          if (!t.isSplash) {
            t.vy += 0.15; // smooth pouring gravity
          }

          const lifeRatio = 1 - t.age / t.life;
          if (lifeRatio <= 0) {
            tiles.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.translate(t.x, t.y);
          ctx.rotate(t.rotation);
          ctx.globalAlpha = lifeRatio;

          // Draw glyph background tile (rounded rectangle)
          const halfSize = t.size / 2;
          ctx.fillStyle = 'rgba(16, 19, 25, 0.85)';
          ctx.strokeStyle = t.color;
          ctx.lineWidth = 1;

          ctx.beginPath();
          if ((ctx as any).roundRect) {
            (ctx as any).roundRect(-halfSize, -halfSize, t.size, t.size, 6);
          } else {
            ctx.rect(-halfSize, -halfSize, t.size, t.size);
          }
          ctx.fill();
          ctx.stroke();

          // Subtle glow bloom
          ctx.shadowColor = t.color;
          ctx.shadowBlur = 8;

          // Draw Glyph Symbol inside tile
          ctx.fillStyle = '#F5F7FA';
          ctx.font = `${Math.floor(t.size * 0.45)}px 'JetBrains Mono', monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(t.char, 0, 1);

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
    />
  );
};

export default GlyphStream;
