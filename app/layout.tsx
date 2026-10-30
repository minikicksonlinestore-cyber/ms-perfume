import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/data";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-cormorant", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  title: "MS PERFUME | Luxury Fragrances, Muscat Oman",
  description: "MS PERFUME, the art of Arabian scent. Oud, amber, musk and rose fragrances by North Muscat Nights for Business LLC, Muscat, Oman.",
};
export const viewport: Viewport = { themeColor: "#0b0604", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: COMPANY.brand,
  legalName: COMPANY.legalName,
  description: "Oud, amber, musk and rose fragrances from Muscat, Oman.",
  telephone: ["+96894247885", "+96876434164"],
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruwi / Muttrah",
    addressLocality: "Muscat",
    addressRegion: "Muscat Governorate",
    postOfficeBoxNumber: "112",
    postalCode: "111",
    addressCountry: "OM",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
