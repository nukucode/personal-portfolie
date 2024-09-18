/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.sanity.io",
      "avatars.githubusercontent.com",
      "github.com",
      "uploads-ssl.webflow.com",
      "firebasestorage.googleapis.com",
    ],
  },

  env: {
    NEXT_PUBLIC_SANITY_DATASET: "production",
    NEXT_PUBLIC_SANITY_PROJECTID: "1t6krb1s",
  },
};

module.exports = nextConfig;
