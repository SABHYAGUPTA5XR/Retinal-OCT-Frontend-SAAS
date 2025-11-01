/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  serverExternalPackages: [
    "@aws-sdk/client-dynamodb",
    "@aws-sdk/util-dynamodb",
    "@aws-sdk/client-s3",
    "sharp",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https", // <-- This is now fixed
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;