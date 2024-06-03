export const getUsernames = async () => {
	return fetch("/api/usernames", {
		cache: "no-store"
	}).then((res) => res.json() as Promise<string[]>)
}

export const getFullnames = async () => {
	return fetch("/api/fullnames", {
		cache: "no-store"
	}).then((res) => res.json() as Promise<string[]>)
}
