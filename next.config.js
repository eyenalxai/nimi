/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		reactCompiler: true
	},
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/usernames",
					destination: "/api/usernames",
					has: [
						{
							type: "header",
							key: "content-type",
							value: "application/json"
						}
					]
				},
				{
					source: "/usernames",
					destination: "/api/usernames",
					has: [
						{
							type: "header",
							key: "content-type",
							value: "text/plain"
						}
					]
				},
				{
					source: "/fullnames",
					destination: "/api/fullnames",
					has: [
						{
							type: "header",
							key: "content-type",
							value: "application/json"
						}
					]
				},
				{
					source: "/fullnames",
					destination: "/api/fullnames",
					has: [
						{
							type: "header",
							key: "content-type",
							value: "text/plain"
						}
					]
				}
			],
			afterFiles: [],
			fallback: []
		}
	}
}

module.exports = nextConfig
