/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["uploads-file-portal-das-escolas.s3.amazonaws.com"],
  },
}



// module.exports = withImages();

module.exports = nextConfig
