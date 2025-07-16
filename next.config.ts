/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 86400, // 24 hours
  },

  // Webpack configuration for better bundling
  webpack: (
    config: any,
    { buildId, dev, isServer, defaultLoaders, webpack }: any
  ) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,

          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: 10,
            chunks: "all",
          },

          common: {
            name: "common",
            minChunks: 2,
            priority: 5,
            chunks: "all",
          },
        },
      };
    }

    return config;
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/Images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/Icons/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Strict mode for better development experience
  reactStrictMode: true,

  // Trailing slash handling
  trailingSlash: false,

  // Redirect configuration
  async redirects() {
    return [
      // Add any redirects you need here
    ];
  },
};

module.exports = nextConfig;
