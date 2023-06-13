/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
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
