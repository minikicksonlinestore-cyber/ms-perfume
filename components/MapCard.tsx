"use client";
import { useState } from "react";
import { COMPANY } from "@/lib/data";
import Icon from "./Icon";

export default function MapCard() {
  const [live, setLive] = useState(false);
  const q = encodeURIComponent(COMPANY.mapQuery);
  return (
    <div className="flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-white/10">
      {live ? (
        <iframe
          title={`${COMPANY.mapQuery} map`}
          src={`https://www.google.com/maps?q=${q}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-[340px] w-full flex-1 border-0 sepia-[.5] contrast-90 grayscale invert-[.9]"
        />
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_50%_40%,#4a2410,#120a06)] p-8 text-center">
          <span className="mb-1 grid h-16 w-16 place-items-center rounded-full border border-orange/40 bg-orange/10 text-orange-light"><Icon name="pin" className="h-8 w-8" /></span>
          <h3 className="font-serif text-[1.6rem]">{COMPANY.addressShort}</h3>
          <p className="mb-3 text-cream/60">{COMPANY.legalName}<br />{COMPANY.addressLine}</p>
          <button type="button" className="btn" onClick={() => setLive(true)}>Show map</button>
        </div>
      )}
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
