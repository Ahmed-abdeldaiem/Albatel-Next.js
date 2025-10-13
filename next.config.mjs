/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect all URLs with query parameters to homepage
      {
        source: '/(.*)',
        has: [
          {
            type: 'query',
            key: 'a',
          },
        ],
        destination: '/',
        permanent: true,
      },
      // Redirect any URL with query parameters to homepage
      {
        source: '/(.*)',
        has: [
          {
            type: 'query',
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
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
