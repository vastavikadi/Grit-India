/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.pinimg.com"
            },
            {
                protocol: "https",
                hostname: "wallpaperaccess.com"
            },
            {
                protocol: "https",
                hostname: "wallpapercave.com"
            },
            {
                protocol: "https",
                hostname: "wallpaperbat.com"
            },
            {
                protocol: "https",
                hostname: "2.bp.blogspot.com"
            },
            {
                protocol: "https",
                hostname: "th.bing.com"
            },
            {
                protocol: "https",
                hostname: "qph.cf2.quoracdn.net"
            },
            {
                protocol: "https",
                hostname: "mews.in"
            },
            {
                protocol: "https",
                hostname: "assets.aceternity.com"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
            {
                protocol: "https",
                hostname: "www.mugasilk.in"
            },
            {
                protocol: "https",
                hostname: "www.ethnicplus.in"
            },
            {
                protocol: "https",
                hostname: "st4.depositphotos.com"
            },
            {
                protocol: "https",
                hostname: "lookmyindia.com"
            },
        ],
        minimumCacheTTL: 3153600000,
    },
};

export default nextConfig;