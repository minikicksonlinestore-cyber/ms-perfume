import { useId } from "react";

type Props = { tone: string; className?: string; label?: string };

/** Glass perfume bottle with coloured liquid. `tone` is the liquid colour. */
export default function Bottle({ tone, className = "", label = "MS" }: Props) {
  const id = useId().replace(/:/g, "");
  const u = (n: string) => `url(#${id}${n})`;
  return (
    <svg viewBox="0 0 200 296" className={className} role="img" aria-label="Perfume bottle">
      <defs>
        <linearGradient id={`${id}cap`} x1="0" x2="1">
          <stop offset="0" stopColor="#2e2e2e" /><stop offset=".14" stopColor="#b9b9b9" /><stop offset=".34" stopColor="#fbfbfb" /><stop offset=".52" stopColor="#8a8a8a" /><stop offset=".78" stopColor="#d4d4d4" /><stop offset="1" stopColor="#3a3a3a" />
        </linearGradient>
        <linearGradient id={`${id}col`} x1="0" x2="1">
          <stop offset="0" stopColor="#6e5326" /><stop offset=".4" stopColor="#f3d98b" /><stop offset="1" stopColor="#5e451d" />
        </linearGradient>
        <linearGradient id={`${id}glass`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".55" /><stop offset=".07" stopColor="#fff" stopOpacity=".1" /><stop offset=".5" stopColor="#fff" stopOpacity=".03" /><stop offset=".93" stopColor="#fff" stopOpacity=".1" /><stop offset="1" stopColor="#fff" stopOpacity=".5" />
        </linearGradient>
        <linearGradient id={`${id}liq`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={tone} /><stop offset=".55" stopColor={tone} stopOpacity=".85" /><stop offset="1" stopColor="#2a0f04" />
        </linearGradient>
        <linearGradient id={`${id}shine`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".7" /><stop offset=".6" stopColor="#fff" stopOpacity=".15" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}shadow`}>
          <stop offset="0" stopColor="#000" stopOpacity=".7" /><stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}glow`} cx=".5" cy=".4" r=".6">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="100" cy="286" rx="78" ry="7" fill={u("shadow")} />

      {/* cap */}
      <rect x="66" y="4" width="68" height="58" rx="5" fill={u("cap")} />
      <rect x="66" y="54" width="68" height="8" fill="#000" opacity=".25" />
      <rect x="70" y="6" width="60" height="2" rx="1" fill="#fff" opacity=".7" />
      {/* collar */}
      <rect x="80" y="62" width="40" height="16" rx="2" fill={u("col")} />

      {/* glass body */}
      <rect x="24" y="76" width="152" height="204" rx="20" fill={u("glass")} stroke="#fff" strokeOpacity=".45" strokeWidth="1.5" />
      <rect x="31" y="246" width="138" height="28" rx="12" fill="#fff" opacity=".1" />

      {/* liquid */}
      <rect x="32" y="110" width="136" height="146" rx="13" fill={u("liq")} />
      <ellipse cx="100" cy="110" rx="68" ry="5" fill="#fff" opacity=".25" />
      <rect x="32" y="110" width="136" height="146" rx="13" fill={u("glow")} />

      {/* label */}
      <rect x="62" y="148" width="76" height="76" rx="3" fill="#7d5a3a" />
      <rect x="62" y="148" width="76" height="76" rx="3" fill="#000" opacity=".12" />
      <rect x="67" y="153" width="66" height="66" rx="2" fill="none" stroke="#f4d9a0" strokeOpacity=".6" />
      {label.length <= 3 ? (
        <>
          <text x="100" y="196" textAnchor="middle" fontFamily="serif" fontSize="24" fill="#f4d9a0" letterSpacing="3">{label}</text>
          <text x="100" y="212" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#f4d9a0" letterSpacing="2">PERFUME</text>
        </>
      ) : (
        <text x="100" y="192" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#f4d9a0" textLength={Math.min(60, label.length * 10)} lengthAdjust="spacingAndGlyphs">{label}</text>
      )}

      {/* highlights */}
      <rect x="35" y="84" width="9" height="162" rx="4.500" fill={u("shine")} />
      <rect x="48" y="122" width="4" height="110" rx="2" fill="#fff" opacity=".18" />
      <rect x="160" y="90" width="4" height="150" rx="2" fill="#fff" opacity=".22" />
    </svg>
  );
}
