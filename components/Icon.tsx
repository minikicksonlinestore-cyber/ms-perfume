export type IconName =
  | "pin" | "phone" | "mail" | "chat" | "bottle" | "building"
  | "wood" | "flower" | "drop" | "citrus" | "attar" | "gift"
  | "bakhoor" | "gem" | "clock" | "dome" | "support";

const PATHS: Record<IconName, React.ReactNode> = {
  pin: <><path d="M12 21s-6.500-5.600-6.500-11a6.500 6.500 0 0 1 13 0c0 5.400-6.500 11-6.500 11z" /><circle cx="12" cy="10" r="2.300" /></>,
  phone: <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  chat: <path d="M4 5h16v11H9l-5 4z" />,
  bottle: <path d="M9 3h6v3H9zM7 6h10l2 4v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V10z" />,
  building: <><path d="M4 21V5l8-2 8 2v16" /><path d="M2 21h20M9 9h2M13 9h2M9 13h2M13 13h2M10.500 21v-4h3v4" /></>,
  wood: <><circle cx="12" cy="12" r="8.500" /><circle cx="12" cy="12" r="5.200" /><circle cx="12" cy="12" r="1.800" /></>,
  flower: <><circle cx="12" cy="12" r="2" /><circle cx="12" cy="6.300" r="2.700" /><circle cx="17.400" cy="10.200" r="2.700" /><circle cx="15.400" cy="16.500" r="2.700" /><circle cx="8.600" cy="16.500" r="2.700" /><circle cx="6.600" cy="10.200" r="2.700" /></>,
  drop: <><path d="M12 3c3.500 4 6 6.800 6 10.300A6 6 0 0 1 6 13.300C6 9.800 8.500 7 12 3z" /><path d="M9.500 14a2.600 2.600 0 0 0 2.500 2.500" /></>,
  citrus: <><circle cx="12" cy="12" r="8.800" /><circle cx="12" cy="12" r="6.600" /><path d="M12 5.400v13.200M5.400 12h13.200M7.300 7.300l9.400 9.400M16.700 7.300l-9.400 9.400" /></>,
  attar: <><path d="M10 3h4M10.500 3v4.500M13.500 3v4.500" /><path d="M6 13.800a6 6 0 1 0 12 0 6 6 0 1 0-12 0" /><path d="M12 11.600c1.200 1.500 1.800 2.300 1.800 3.100a1.800 1.800 0 0 1-3.600 0c0-.8.600-1.600 1.800-3.100z" /></>,
  gift: <><rect x="3" y="8.500" width="18" height="4" rx="1" /><path d="M5 12.500V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7.500M12 8.500V21" /><path d="M12 8.500C10.500 4.800 6.500 4.800 6.500 7S9 8.500 12 8.500zM12 8.500c1.500-3.700 5.500-3.700 5.500-1.500S15 8.500 12 8.500z" /></>,
  bakhoor: <><path d="M5 12h14a7 7 0 0 1-14 0z" /><path d="M9 21h6M12 19v2M10 9c0-1.500 1.500-1.500 1.500-3S10 3.500 10 3.500M14 9c0-1.500 1.500-1.500 1.500-3S14 3.500 14 3.500" /></>,
  gem: <><path d="M6 4h12l3 5-9 11L3 9z" /><path d="M3 9h18M9 4 7 9l5 11M15 4l2 5-5 11" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.200 2" /></>,
  dome: <><path d="M5 21v-8c0-4 3-7 7-9 4 2 7 5 7 9v8" /><path d="M3 21h18M9.500 21v-4.500a2.500 2.500 0 0 1 5 0V21M12 2v2" /></>,
  support: <><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6" rx="1.500" /><rect x="17" y="13" width="4" height="6" rx="1.500" /><path d="M19 19c0 1.700-2 2-5 2" /></>,
};

export default function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {PATHS[name]}
    </svg>
  );
}

/** Round icon badge used on cards. */
export function IconBadge({ name, className = "", big = false }: { name: IconName; className?: string; big?: boolean }) {
  return (
    <span className={`mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full border border-orange/30 bg-orange/10 text-orange-light sm:mb-4 sm:h-14 sm:w-14 ${className}`}>
      <Icon name={name} className={big ? "h-6 w-6 sm:h-9 sm:w-9" : "h-5 w-5 sm:h-6 sm:w-6"} />
    </span>
  );
}
