import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mon Portfolio – Version 1",
  description:
    "Un site vitrine propulsé par Next.js, avec un style tech et futuriste.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Préchargement des polices INTER */}
        <link
          rel="preload"
          href="/fonts/inter/subset-Inter18pt-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter/subset-Inter18pt-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter/subset-Inter18pt-MediumItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Préchargement des polices ORBITRON */}
        <link
          rel="preload"
          href="/fonts/orbitron/subset-Orbitron-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/orbitron/subset-Orbitron-ExtraBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased font-body bg-black text-white">
        {children}
      </body>
    </html>
  );
}
