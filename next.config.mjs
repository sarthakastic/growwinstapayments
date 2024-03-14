/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: ["ppi-test.canopi.in"],

    // production URL
    domains: ["fakestoreapi.com", "groww.in"],
  },
  redirects() {
    return [
      {
        source: "/",
        destination: "/checkout",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
