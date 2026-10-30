import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-cormorant", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  title: "MS PERFUME | Luxury Fragrances, Muscat Oman",
  description: "MS PERFUME, the art of Arabian scent. Oud, amber, musk and rose fragrances by North Muscat Nights for Business LLC, Muscat, Oman.",
};
export const viewport: Viewport = { themeColor: "#0b0604", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
