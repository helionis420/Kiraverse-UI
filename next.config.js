/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const { PUBLIC_URL = 'https://v2.kiraverse.game' } = process.env;

const fonts = ['Kusanagi', 'SpaceMono-Regular', 'SpaceMono-Bold'];

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

export default withBundleAnalyzer({
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${PUBLIC_URL}/api/:path*`,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ['images.unsplash.com', 'kiraverse.game'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  headers() {
    const fontsHeadersConfig = fonts.flatMap((font) => {
      const fontHeaders = [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ];

      return [
        {
          source: `/fonts/${font}.woff`,
          headers: fontHeaders,
        },
        {
          source: `/fonts/${font}.woff2`,
          headers: fontHeaders,
        },
      ];
    });

    return fontsHeadersConfig;
  },
});
