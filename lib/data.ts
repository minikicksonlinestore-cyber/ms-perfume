export const COMPANY = {
  brand: "MS PERFUME",
  legalName: "North Muscat Nights for Business LLC",
  country: "Sultanate of Oman",
  phone: "+968 94247885",
  phoneHref: "tel:+96894247885",
  // Second line.
  phone2: "+968 76434164",
  phone2Href: "tel:+96876434164",
  email: "VIPOWER0989@OUTLOOK.COM",
  address: "Ruwi / Muttrah, Muscat Governorate, Sultanate of Oman",
  addressLine: "P.O. Box 112, P.C. 111",
  addressShort: "Ruwi / Muttrah, Muscat",
  mapQuery: "Ruwi, Muttrah, Muscat, Oman",
  registration: [
    { label: "Commercial Reg. No. (CR)", value: "1655174" },
    { label: "OCCI Number", value: "866844" },
    { label: "Tax Card No.", value: "131322823" },
    { label: "TIN", value: "2271564" },
    { label: "License Number", value: "L3720247" },
    { label: "P.O. Box / P.C.", value: "112 / 111" },
    { label: "Head Quarter", value: "Ruwi / Muttrah, Muscat Governorate" },
  ],
} as const;

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "perfumes", label: "Our Perfumes" },
  { id: "categories", label: "Categories" },
  { id: "why", label: "Why Choose Us" },
  { id: "contact", label: "Contact Us" },
] as const;

/** Optional `image`: a real photo placed in /public/perfumes (e.g. "/perfumes/dior-sauvage.webp"). Falls back to the drawn bottle. */
export type Perfume = { brand: string; name: string; type: string; label: string; tone: string; image?: string };

export const PERFUMES: Perfume[] = [
  { brand: "Dior", name: "Sauvage", type: "Eau de Parfum", label: "DIOR", tone: "#e0842c", image: "/perfumes/dior-sauvage.webp" },
  { brand: "Giorgio Armani", name: "Acqua di Giò", type: "Eau de Parfum", label: "ARMANI", tone: "#8a1f2c", image: "/perfumes/armani-acqua-di-gio.webp" },
  { brand: "Versace", name: "Eros", type: "Eau de Toilette", label: "VERSACE", tone: "#d9631e", image: "/perfumes/versace-eros.webp" },
  { brand: "Bvlgari", name: "Man In Black", type: "Eau de Parfum", label: "BVLGARI", tone: "#b8863a", image: "/perfumes/bvlgari-man-in-black.webp" },
  { brand: "Hermès", name: "Terre d'Hermès", type: "Parfum", label: "HERMÈS", tone: "#e8b04e", image: "/perfumes/hermes-terre-d-hermes.webp" },
  { brand: "Davidoff", name: "Cool Water", type: "Eau de Toilette", label: "DAVIDOFF", tone: "#c8792c", image: "/perfumes/davidoff-cool-water.webp" },
];

export const CATEGORIES = [
  { icon: "wood", name: "Oud & Woody", text: "Deep, smoky and majestic, with resinous woods that command attention." },
  { icon: "flower", name: "Floral", text: "Rose, jasmine and soft petals, from delicate to dramatic." },
  { icon: "drop", name: "Amber & Musk", text: "Warm, sensual and comforting. Close to the skin and hard to forget." },
  { icon: "citrus", name: "Fresh & Citrus", text: "Bright, clean and energising for everyday wear." },
  { icon: "attar", name: "Attar & Oils", text: "Alcohol-free concentrates, applied by hand and worn with intention." },
  { icon: "gift", name: "Gift Sets", text: "Presented in luxury boxes, for those who deserve something special." },
];

export const WHY = [
  { n: "01", icon: "gem", name: "Premium Ingredients", text: "Oud, amber, rose and musk, chosen for depth and character." },
  { n: "02", icon: "clock", name: "Made to Linger", text: "Rich compositions designed to stay with you from morning to night." },
  { n: "03", icon: "dome", name: "Omani Heritage", text: "Rooted in Gulf perfumery and shaped for modern taste." },
  { n: "04", icon: "support", name: "Personal Service", text: "Speak to us by phone and we will help you find your scent." },
];
