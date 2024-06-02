import { env } from "@/lib/env"

const buildBackendURL = (host: string) => {
	const protocol = env.environment === "development" ? "http://" : "https://"
	return `${protocol}${host}`
}

export const getUsernames = async (host: string) => {
	return fetch(`${buildBackendURL(host)}/api/usernames`, {
		cache: "no-store"
	}).then((res) => res.json() as Promise<string[]>)
}

export const getFullnames = async (host: string) => {
	return fetch(`${buildBackendURL(host)}/api/fullnames`, {
		cache: "no-store"
	}).then((res) => res.json() as Promise<string[]>)
}
