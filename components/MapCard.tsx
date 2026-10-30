"use client";
import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/data";
import Icon from "./Icon";

type Mode = "card" | "map";

/**
 * The location card is the default and always renders. The live Google Map replaces it only when
 * the page is a normal top-level tab, or when a visitor asks for it. If the browser or a viewer
 * blocks the frame, it falls back to the card, so nobody sees a "content is blocked" box.
 */
export default function MapCard() {
  const [mode, setMode] = useState<Mode>("card");
  const q = encodeURIComponent(COMPANY.mapQuery);

  useEffect(() => {
    // A Content-Security-Policy that forbids frames reports a violation: drop back to the card.
    // The listener goes on first, so it is already waiting when the frame is added.
    const onViolation = (e: SecurityPolicyViolationEvent) => {
      if (/frame|child/.test(e.violatedDirective)) setMode("card");
    };
    document.addEventListener("securitypolicyviolation", onViolation);
    // Inside another page or a viewer (iframe): keep the card and offer the button.
    if (window.self === window.top) setMode("map");
    return () => document.removeEventListener("securitypolicyviolation", onViolation);
  }, []);

  return (
    <div className="flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-white/10">
      <div className="relative min-h-[360px] flex-1 bg-[radial-gradient(circle_at_50%_40%,#4a2410,#120a06)]">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-8 text-center">
          <span className="mb-1 grid h-16 w-16 place-items-center rounded-full border border-orange/40 bg-orange/10 text-orange-light"><Icon name="pin" className="h-8 w-8" /></span>
          <h3 className="font-serif text-[1.6rem]">{COMPANY.addressShort}</h3>
          <p className="text-cream/60">{COMPANY.legalName}<br />{COMPANY.addressLine}</p>
          {mode === "card" && (
            <button type="button" className="btn mt-3" onClick={() => setMode("map")}>Show map</button>
          )}
        </div>
        {mode === "map" && (
          <iframe
            title={`${COMPANY.mapQuery} map`}
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="relative h-full min-h-[360px] w-full border-0 sepia-[.5] contrast-90 grayscale invert-[.9]"
          />
        )}
      </div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${q}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-b from-[#dc6a22] to-[#b8470f] p-3.5 text-center text-[.72rem] uppercase tracking-[.2em] text-white transition hover:brightness-110"
      >
        Open in Google Maps
      </a>
    </div>
  );
}
