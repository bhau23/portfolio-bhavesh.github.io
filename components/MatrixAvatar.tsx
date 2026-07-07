"use client";

import { useEffect, useRef } from "react";

/* Real-time 3D dot-matrix head: a fibonacci point-sphere with a denser
   "face" band, rotated in 3D and perspective-projected onto the canvas.
   Pure math, no libraries — weighs nothing. */
export default function MatrixAvatar({ size = 44 }: { size?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const N = 220;
    const R = size * 0.38;
    const pts: { x: number; y: number; z: number; face: boolean }[] = [];
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      const inc = Math.acos(1 - 2 * t);
      const az = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = R * Math.sin(inc) * Math.cos(az);
      const y = R * Math.cos(inc);
      const z = R * Math.sin(inc) * Math.sin(az);
      // mark a frontal band as the "face" — rendered brighter
      pts.push({ x, y, z, face: z > R * 0.55 && Math.abs(y) < R * 0.6 });
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let a = 0;

    const draw = () => {
      a += reduced ? 0 : 0.012;
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;
      const cosA = Math.cos(a);
      const sinA = Math.sin(a);
      const tilt = 0.25;
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);

      for (const p of pts) {
        // rotate around Y, then slight X tilt
        const x1 = p.x * cosA + p.z * sinA;
        const z1 = -p.x * sinA + p.z * cosA;
        const y1 = p.y * cosT - z1 * sinT;
        const z2 = p.y * sinT + z1 * cosT;

        const persp = size / (size + z2 * 1.6);
        const sx = cx + x1 * persp;
        const sy = cy + y1 * persp;
        const depth = (z2 + R) / (2 * R); // 0 back → 1 front

        const r = (p.face ? 1.3 : 0.9) * persp;
        const alpha = 0.15 + depth * 0.85;
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(r, 0.4), 0, Math.PI * 2);
        ctx.fillStyle = p.face
          ? `rgba(255, 70, 110, ${alpha})`
          : `rgba(255, 0, 79, ${alpha * 0.8})`;
        ctx.fill();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [size]);

  return (
    <canvas
      ref={ref}
      style={{ width: size, height: size, display: "block" }}
      aria-hidden="true"
    />
  );
}
