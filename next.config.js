/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/lavalounge', 
    assetPrefix: process.env.NODE_ENV === 'production' ? '/lavalounge' : '', 
}

module.exports = nextConfig
