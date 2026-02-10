import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour le déploiement Netlify
  experimental: {
    // Améliore la performance du build
    optimizePackageImports: ['framer-motion'],
  },
  // Force le mode standalone pour Netlify
  output: 'standalone',
  // Génère un build ID unique pour chaque déploiement
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
