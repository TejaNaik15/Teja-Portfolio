"use client";

import React, { useRef, useEffect, useState } from "react";

type VapourTextProps = {
  text: string;
  onComplete?: () => void;
};

export default function VapourText({ text, onComplete }: VapourTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = 800 * dpr;
    canvas.height = 200 * dpr;
    canvas.style.width = "800px";
    canvas.style.height = "200px";

    ctx.scale(dpr, dpr);
    ctx.font = "bold 80px Inter, sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 400, 100);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const particles: any[] = [];

    for (let y = 0; y < canvas.height; y += 4) {
      for (let x = 0; x < canvas.width; x += 4) {
        const index = (y * canvas.width + x) * 4;
        const alpha = imageData.data[index + 3];
        if (alpha > 128) {
          particles.push({
            x: x / dpr,
            y: y / dpr,
            originalX: x / dpr,
            originalY: y / dpr,
            vx: 0,
            vy: 0,
            life: 1,
          });
        }
      }
    }

    particlesRef.current = particles;

    let frame = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, 800, 200);
      frame++;

      const vaporizeX = (frame / 120) * 800;

      particles.forEach((p) => {
        if (p.originalX < vaporizeX && p.life > 0) {
          p.vx += (Math.random() - 0.5) * 2;
          p.vy += (Math.random() - 0.5) * 2 - 0.5;
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.015;
          p.vx *= 0.95;
          p.vy *= 0.95;
        }

        if (p.life > 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.life})`;
          ctx.fillRect(p.x, p.y, 2, 2);
        }
      });

      if (frame < 90) {
        animationId = requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
        onComplete?.();
      }
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [text, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="max-w-full"
      style={{ imageRendering: "crisp-edges" }}
    />
  );
}
