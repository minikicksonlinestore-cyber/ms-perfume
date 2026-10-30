"use client";
import { useEffect, useState } from "react";

type Dot = { left: string; top: string; delay: string };

export default function Sparkles({ count = 24 }: { count?: number }) {
  const [dots, setDots] = useState<Dot[]>([]);
  useEffect(() => {
    setDots(
      Array.from({ length: count }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
      })),
    );
  }, [count]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d, i) => (
        <i key={i} className="absolute h-[3px] w-[3px] animate-twinkle rounded-full bg-champagne opacity-0" style={{ left: d.left, top: d.top, animationDelay: d.delay }} />
      ))}
    </div>
  );
}
