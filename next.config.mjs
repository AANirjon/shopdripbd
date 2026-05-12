const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org"
            }
        ]
    },
    reactStrictMode: true
};

export default nextConfig;
