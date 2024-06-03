export const getUsernames = async () => {
	return fetch("/api/usernames", {}).then((res) => res.json() as Promise<string[]>)
}

export const getFullnames = async () => {
	return fetch("/api/fullnames", {}).then((res) => res.json() as Promise<string[]>)
}
