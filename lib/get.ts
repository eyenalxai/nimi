import { generateFullName, generateUsername } from "@/lib/generate"

export const getUsernames = async () => {
	return Array.from({ length: 10 }, () => generateUsername(3))
}

export const getFullnames = async () => {
	return Array.from({ length: 10 }, () => generateFullName(2, 3))
}
