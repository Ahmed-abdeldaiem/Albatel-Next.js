/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect all URLs with query parameters to homepage (except sitemap and robots)
      {
        source: '/((?!sitemap\\.xml|robots\\.txt).*)',
        has: [
          {
            type: 'query',
            key: 'a',
          },
        ],
        destination: '/',
        permanent: true,
      },
      // Block suspicious file extensions
      {
        source: '/(.*)\\.(php|asp|jsp|cgi|pl)$',
        destination: '/',
        permanent: true,
      },
      // Block admin paths
      {
        source: '/(admin|wp-admin|phpmyadmin|cpanel|config|backup|temp|tmp)(.*)',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
