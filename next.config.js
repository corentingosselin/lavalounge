/** @type {import('next').NextConfig} */
const NEXT_PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const nextConfig = {
    output: 'export',
    basePath: NEXT_PUBLIC_BASE_PATH,
    assetPrefix: NEXT_PUBLIC_BASE_PATH
}

module.exports = nextConfig
