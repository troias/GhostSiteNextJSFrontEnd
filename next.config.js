/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "robsitebackend.herokuapp.com", "inkedillubucket.s3.ap-southeast-2.amazonaws.com"],
  },
}

module.exports = nextConfig
