/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://web-dev.dev.kimo.ai/:path*'
            }
        ]
    }
}

module.exports = nextConfig
