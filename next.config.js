/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
	images: {
		domains: ["image.tmdb.org"],
	},

	env: {
		apiKey: process.env.NEXT_PUBLIC_API_KEY,
	},

	serverRuntimeConfig: {
		apiKey: process.env.NEXT_PUBLIC_API_KEY,
	},

	publicRuntimeConfig: {
		apiKey: process.env.NEXT_PUBLIC_API_KEY,
	},
};
