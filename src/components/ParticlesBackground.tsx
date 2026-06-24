"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const currentCanvas = canvas; // Guaranteed non-null in closure references

    const ctx = currentCanvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particlesArray: Particle[] = [];
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120, // Mouse interaction radius
    };

    const handleResize = () => {
      currentCanvas.width = window.innerWidth;
      currentCanvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    currentCanvas.width = window.innerWidth;
    currentCanvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      baseSize: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.baseSize = size;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        // Change colors depending on theme
        if (theme === "dark") {
          ctx.fillStyle = "rgba(139, 92, 246, 0.15)"; // Violet tint
        } else {
          ctx.fillStyle = "rgba(59, 130, 246, 0.1)"; // Blue tint
        }
        ctx.fill();
      }

      update() {
        if (this.x > currentCanvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > currentCanvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse hover interaction: push away or pull in gently
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            // Push away
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            this.x -= forceDirectionX * force * 1.5;
            this.y -= forceDirectionY * force * 1.5;
            this.size = this.baseSize * 1.5; // Grow slightly
          } else {
            if (this.size > this.baseSize) {
              this.size -= 0.05;
            }
          }
        } else {
          if (this.size > this.baseSize) {
            this.size -= 0.05;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      // Calculate particle count relative to screen area (less density on mobile)
      const numberOfParticles = Math.min(
        100,
        Math.floor((currentCanvas.width * currentCanvas.height) / 16000)
      );

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (currentCanvas.width - size * 2) + size;
        const y = Math.random() * (currentCanvas.height - size * 2) + size;
        const directionX = (Math.random() * 0.4) - 0.2;
        const directionY = (Math.random() * 0.4) - 0.2;

        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    // Draw connection lines
    const connect = () => {
      if (!ctx) return;
      const maxDistance = 100;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.07;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            
            if (theme === "dark") {
              ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`; // Indigo
            } else {
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`; // Blue
            }
            
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-500 opacity-80"
    />
  );
}
