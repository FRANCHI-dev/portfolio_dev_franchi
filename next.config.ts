import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 🔥 Permet d'exporter le site en HTML statique (Next.js 13+ avec App Router)
  images: {
    unoptimized: true, // 🔧 Désactive l'optimisation des images car pas de serveur Node.js côté client
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
