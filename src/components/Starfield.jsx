import { useEffect, useRef } from "react";
import styles from "./Starfield.module.css";

const STAR_COUNT = 70;
const HOVER_RADIUS = 110;
const LINK_DISTANCE = 75;

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.5 + Math.random() * 1.2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.015 + Math.random() * 0.02,
    }));

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    let raf;
    let t = 0;

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((s) => {
        ctx.fillStyle = "rgba(139, 147, 160, 0.35)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      const near = stars.filter(
        (s) => Math.hypot(s.x - mouse.x, s.y - mouse.y) < HOVER_RADIUS
      );
      for (let i = 0; i < near.length; i++) {
        for (let j = i + 1; j < near.length; j++) {
          const d = Math.hypot(
            near[i].x - near[j].x,
            near[i].y - near[j].y
          );
          if (d < LINK_DISTANCE) {
            ctx.strokeStyle = "rgba(79, 209, 197, 0.25)";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(near[i].x, near[i].y);
            ctx.lineTo(near[j].x, near[j].y);
            ctx.stroke();
          }
        }
      }

      stars.forEach((s) => {
        const twinkle = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        const dist = Math.hypot(s.x - mouse.x, s.y - mouse.y);
        const isNear = dist < HOVER_RADIUS;
        const alpha = isNear ? 0.7 + twinkle * 0.2 : 0.18 + twinkle * 0.25;
        const color = isNear ? "79, 209, 197" : "139, 147, 160";
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, isNear ? s.r * 1.5 : s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    if (reducedMotion) {
      drawStatic();
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}