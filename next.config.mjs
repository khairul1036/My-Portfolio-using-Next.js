/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // pathname: "/nodelove/image/upload/f_auto,q_auto/v1/portfolio/",
      },
      {
        protocol: "https",
        hostname: "res+.cloudinary.com",
        port: "",
        // pathname: "/nodelove/image/upload/f_auto,q_auto/v1/portfolio/",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "gravatar.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.empowernextgenbd.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
      },
    ],
  },
};

export default nextConfig;
