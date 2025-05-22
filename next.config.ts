import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate', // Giảm max-age
          },
        ],
      },
    ];
  },
  webpack(config, { dev }) {
    if (dev) {
      // Bỏ config.cache = false để sử dụng cache mặc định của Webpack
      config.optimization = {
        ...config.optimization,
        runtimeChunk: false, // Giữ nguyên để tránh lỗi runtime
      };
    }
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;