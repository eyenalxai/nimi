class ClientSettings {
	environment: "development" | "production" | "test"
	backendDomain: undefined | string = process.env.NEXT_PUBLIC_BACKEND_DOMAIN
	backendURL: string

	constructor() {
		this.environment = process.env.NODE_ENV
		if (!this.environment) throw new Error("NODE_ENV not set")

		if (this.environment !== "development" && this.environment !== "production" && this.environment !== "test") {
			throw new Error("NODE_ENV must be one of development, production, or test")
		}

		if (!this.backendDomain) throw new Error("NEXT_PUBLIC_BACKEND_DOMAIN not set")

		const protocol = this.environment === "development" ? "http://" : "https://"
		this.backendURL = `${protocol}${this.backendDomain}`
	}
}

export const clientSettings = new ClientSettings()
