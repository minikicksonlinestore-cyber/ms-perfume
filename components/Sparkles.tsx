/** Fixed, pre-computed positions: no client JS, and the server and browser render the same dots. */
const DOTS = Array.from({ length: 18 }, (_, i) => ({
  left: `${((i * 53 + 11) % 97) + 1}%`,
  top: `${((i * 37 + 23) % 91) + 4}%`,
  delay: `${((i * 7) % 50) / 10}s`,
}));

export default function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {DOTS.map((d, i) => (
        <i key={i} className="absolute h-[3px] w-[3px] animate-twinkle rounded-full bg-champagne opacity-0" style={{ left: d.left, top: d.top, animationDelay: d.delay }} />
      ))}
    </div>
  );
}
