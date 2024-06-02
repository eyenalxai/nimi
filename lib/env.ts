class Env {
	environment: "development" | "production" | "test"

	constructor() {
		this.environment = process.env.NODE_ENV
		if (!this.environment) throw new Error("NODE_ENV not set")

		if (this.environment !== "development" && this.environment !== "production" && this.environment !== "test") {
			throw new Error("NODE_ENV must be one of development, production, or test")
		}
	}
}

export const env = new Env()
