import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },
};

export default nextConfig;
