const withPWA = require("next-pwa")

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
})
