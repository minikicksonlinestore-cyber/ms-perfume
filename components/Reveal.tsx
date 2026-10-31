/** Server component: the scroll animation itself is driven by one shared RevealObserver. */
export default function Reveal({ children, className = "", delay = 0, from }: { children: React.ReactNode; className?: string; delay?: number; from?: "left" | "right" | "zoom" }) {
  return (
    <div className={`reveal ${from ? `reveal-${from}` : ""} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
