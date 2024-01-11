/** @type {import('next').NextConfig} */
// const nextConfig = {}

require('dotenv').config()
module.exports = {
    images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'drive.google.com',
              port: '',
              pathname: '/**',
            },
          ],
    },
}

