"use client";
import { useEffect, useRef } from "react";

type Shape = {
  x: number;
  y: number;
  size: number;
  velocityX: number;
  velocityY: number;
  color: string;
};

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const animationFrameRef = useRef<number>(100);

  useEffect(() => {
    // Generate random shapes
    const generateShapes = () => {
      const shapes: Shape[] = [];
      const shapeCount = Math.floor(Math.random() * 8 + 5); // 5-12 shapes
      const colors = [
        "rgba(255,255,255,0.3)",
        "rgba(255,228,196,0.3)",
        "rgba(173,216,230,0.3)",
      ];

      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 40 + 20, // 20-60px
          velocityX: (Math.random() - 0.5) * 0.8,
          velocityY: (Math.random() - 0.5) * 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      return shapes;
    };

    shapesRef.current = generateShapes();

    const animate = () => {
      if (!containerRef.current) return;

      // Update positions
      shapesRef.current.forEach((shape) => {
        shape.x += shape.velocityX;
        shape.y += shape.velocityY;

        // Bounce off walls
        if (shape.x < 0 || shape.x > window.innerWidth) shape.velocityX *= -1;
        if (shape.y < 0 || shape.y > window.innerHeight) shape.velocityY *= -1;
      });

      // Update DOM
      containerRef.current.childNodes.forEach((child, index) => {
        const shape = shapesRef.current[index];
        if (child instanceof HTMLElement) {
          child.style.transform = `translate(${shape.x}px, ${shape.y}px)`;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameRef.current!);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {shapesRef.current.map((shape, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-xl transition-transform duration-300 ease-linear"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: shape.color,
            transform: `translate(${shape.x}px, ${shape.y}px)`,
          }}
        />
      ))}
    </div>
  );
}
