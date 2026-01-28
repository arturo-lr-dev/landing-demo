import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landing Demo Gratis | Tu Landing Page Sin Coste Inicial",
  description:
    "Diseñamos y desarrollamos tu landing page completamente gratis. Solo pagas si te convence. Sin riesgos, sin ataduras.",
  keywords: "landing page, diseño web, desarrollo web, gratis, sin coste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${archivoBlack.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
