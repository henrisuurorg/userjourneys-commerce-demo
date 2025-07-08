export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // No remote patterns needed for mock data - images are served locally
  },
  // Allow PostHog to access images during session recording
  allowedDevOrigins: ["eu.posthog.com", "eu.i.posthog.com"],
  async rewrites() {
    return [
      {
        source: "/api/event/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/api/event/decide",
        destination: "https://eu.i.posthog.com/decide",
      },
      {
        source: "/api/event/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};
