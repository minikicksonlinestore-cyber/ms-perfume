"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { COMPANY, NAV } from "@/lib/data";
import Icon from "./Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Top bar background: flips once past 40px. Only touches state when the value changes.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        setScrolled(window.scrollY > 40);
      });
    };
    setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active menu item: an observer watches a thin band across the middle of the screen,
  // so the page never has to be measured while scrolling.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Mobile menu: lock page scroll while open, close with Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-black/65 backdrop-blur-[2px] lg:hidden" aria-hidden />}
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 border-b border-white/10 bg-ink/90 backdrop-blur transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5">
        <a href="#home" className="flex items-center gap-2.5 font-serif text-[1.7rem] tracking-wide text-cream">
          <Image src="/logo-sm.webp" alt="MS PERFUME logo" width={79} height={64} unoptimized className="h-auto w-[62px]" />
          <span>MS PERFUME<span className="text-orange">.</span></span>
        </a>

        <ul id="site-menu" className={`fixed inset-y-0 right-0 z-50 flex w-[78%] flex-col items-center justify-center gap-8 border-l border-white/10 bg-ink-2 text-sm transition-transform duration-500 lg:static lg:w-auto lg:translate-x-0 lg:flex-row lg:gap-5 xl:gap-9 lg:border-0 lg:bg-transparent ${open ? "translate-x-0" : "translate-x-full"}`}>
          {NAV.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`whitespace-nowrap border-b pb-1.5 transition ${active === id ? "border-orange text-cream" : "border-transparent text-cream/70 hover:text-cream"}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={COMPANY.phoneHref} className="hidden items-center gap-2 text-sm text-cream/80 transition hover:text-orange-light xl:flex">
            <Icon name="phone" className="h-4 w-4" />
            {COMPANY.phone}
          </a>
          <button aria-label="Menu" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)} className="relative z-[60] grid h-11 w-11 place-items-center rounded-full border border-orange/50 lg:hidden">
            <span className="relative block h-3 w-5">
              <i className={`absolute left-0 h-[1.5px] w-full bg-cream transition-all ${open ? "top-1/2 rotate-45" : "top-0"}`} />
              <i className={`absolute left-0 top-1/2 h-[1.5px] w-full bg-cream transition-all ${open ? "opacity-0" : ""}`} />
              <i className={`absolute left-0 h-[1.5px] w-full bg-cream transition-all ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </div>
    </nav>
    </>
  );
}
