import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations pour le déploiement
  experimental: {
    // Améliore la performance du build
    optimizePackageImports: ['framer-motion'],
  },
  // Génère un build ID unique pour chaque déploiement
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
