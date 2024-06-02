import { clientSettings } from "@/lib/env"

export const getUsernames = async () => {
	return fetch(`${clientSettings.backendURL}/api/usernames`, {
		cache: "no-store"
	}).then((res) => res.json() as Promise<{ usernames: string[] }>)
}

export const getFullnames = async () => {
	return fetch(`${clientSettings.backendURL}/api/fullnames`, {
		cache: "no-store"
	}).then((res) => res.json() as Promise<{ fullnames: string[] }>)
}
