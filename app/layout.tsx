import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whaly Seguros - Protegemos tu tranquilidad",
  description:
    "Más de 30 años de experiencia en seguros personales, empresariales y obligatorios. Diferentes de verdad.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo-violeta.png",
        type: "image/png",
      },
    ],
    apple: "/logo-violeta.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
