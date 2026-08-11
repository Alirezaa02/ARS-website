import { useEffect, useRef } from "react";

// Ambient background: two drifting gradient blooms on canvas + a fine grid overlay.
// Lightweight, respects reduced-motion by falling back to a static frame.
export default function Aurora() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dots = Array.from({ length: 34 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
      a: Math.random() * 0.4 + 0.15,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      // drifting blooms
      const blooms = [
        { x: 0.25 + Math.sin(t * 0.0004) * 0.05, y: 0.3, c: "34,227,195", s: 0.55 },
        { x: 0.78 + Math.cos(t * 0.0003) * 0.05, y: 0.65, c: "46,166,255", s: 0.5 },
      ];
      blooms.forEach((b) => {
        const g = ctx.createRadialGradient(
          b.x * w, b.y * h, 0,
          b.x * w, b.y * h, Math.max(w, h) * b.s
        );
        g.addColorStop(0, `rgba(${b.c},0.16)`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });

      // particles
      dots.forEach((d) => {
        if (!reduced) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < 0 || d.x > 1) d.vx *= -1;
          if (d.y < 0 || d.y > 1) d.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(d.x * w, d.y * h, d.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150,240,220,${d.a})`;
        ctx.fill();
      });

      t += 16;
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
    </div>
  );
}
