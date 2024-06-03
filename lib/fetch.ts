import { envSettings } from "@/lib/env"

export const getUsernames = async () => {
	return fetch(`${envSettings.backendURL}/api/usernames`, {
		cache: "no-store"
	}).then((res) => res.json() as Promise<string[]>)
}

export const getFullnames = async () => {
	return fetch(`${envSettings.backendURL}/api/fullnames`, {
		cache: "no-store"
	}).then((res) => res.json() as Promise<string[]>)
}
