"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let max = 1;
    let ticking = false;
    const measure = () => {
      max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };
    const paint = () => {
      ticking = false;
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, window.scrollY / max)})`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(paint);
      }
    };
    measure();
    paint();
    const ro = new ResizeObserver(measure);
    ro.observe(document.documentElement);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[70] h-[3px]">
      <div ref={bar} className="h-full origin-left scale-x-0 bg-gradient-to-r from-orange-hot via-orange-light to-champagne" />
    </div>
  );
}
