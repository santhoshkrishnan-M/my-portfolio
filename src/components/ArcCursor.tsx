import React, { useEffect, useRef } from 'react';

export const ArcCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, prevX: width / 2, prevY: height / 2, speed: 0 };
    let points: { x: number; y: number; age: number; maxAge: number }[] = [];
    let sparks: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string }[] = [];
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      points.push({ x: mouse.x, y: mouse.y, age: 0, maxAge: 18 });

      // Spawn electrical sparks on mouse velocity
      const sparkCount = Math.min(Math.floor(mouse.speed / 4) + 1, 6);
      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const force = Math.random() * 4 + 1;
        sparks.push({
          x: mouse.x,
          y: mouse.y,
          vx: Math.cos(angle) * force,
          vy: Math.sin(angle) * force,
          life: 0,
          maxLife: 15 + Math.random() * 15,
          color: Math.random() > 0.4 ? '#00E5FF' : '#2563FF'
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Helper to draw lightning bolts between points
    const drawLightning = (x1: number, y1: number, x2: number, y2: number, opacity: number) => {
      const dist = Math.hypot(x2 - x1, y2 - y1);
      if (dist < 2) return;

      const segments = Math.max(2, Math.floor(dist / 12));
      let currentX = x1;
      let currentY = y1;

      ctx.beginPath();
      ctx.moveTo(currentX, currentY);

      for (let i = 1; i < segments; i++) {
        const t = i / segments;
        const targetX = x1 + (x2 - x1) * t;
        const targetY = y1 + (y2 - y1) * t;

        // Add perpendicular jitter to simulate electrical arc discharge
        const offset = (Math.random() - 0.5) * 8 * (1 - opacity * 0.5);
        const normalX = -(y2 - y1) / dist;
        const normalY = (x2 - x1) / dist;

        const nextX = targetX + normalX * offset;
        const nextY = targetY + normalY * offset;

        ctx.lineTo(nextX, nextY);
        currentX = nextX;
        currentY = nextY;
      }

      ctx.lineTo(x2, y2);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
      ctx.stroke();

      // Outer glow line
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = `rgba(37, 99, 255, ${opacity * 0.4})`;
      ctx.stroke();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion && points.length > 1) {
        // Draw crackling arcs between mouse history points
        for (let i = points.length - 1; i > 0; i--) {
          const pt = points[i];
          const prevPt = points[i - 1];
          const opacity = (1 - pt.age / pt.maxAge);

          if (opacity > 0) {
            drawLightning(prevPt.x, prevPt.y, pt.x, pt.y, opacity);
          }

          pt.age += 1;
        }

        // Clean up old points
        points = points.filter((p) => p.age < p.maxAge);

        // Update and render electric sparks
        for (let i = sparks.length - 1; i >= 0; i--) {
          const spark = sparks[i];
          spark.x += spark.vx;
          spark.y += spark.vy;
          spark.vx *= 0.92;
          spark.vy *= 0.92;
          spark.life += 1;

          const lifeRatio = 1 - spark.life / spark.maxLife;
          if (lifeRatio <= 0) {
            sparks.splice(i, 1);
            continue;
          }

          ctx.fillStyle = spark.color;
          ctx.globalAlpha = lifeRatio;
          ctx.beginPath();
          ctx.arc(spark.x, spark.y, 1.2 * lifeRatio, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        // Draw glowing electrical cursor node
        const glowRadius = 8 + Math.min(mouse.speed * 0.2, 12);
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRadius);
        grad.addColorStop(0, 'rgba(0, 229, 255, 0.9)');
        grad.addColorStop(0.4, 'rgba(37, 99, 255, 0.5)');
        grad.addColorStop(1, 'rgba(0, 229, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
