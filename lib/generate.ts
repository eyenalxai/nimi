import { syllables } from "@/lib/syllables"

const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

const generateString = (minLength: number, maxLength: number = minLength): string =>
	Array.from(
		{ length: Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength },
		() => syllables[Math.floor(Math.random() * syllables.length)]
	).join("")

export const generateUsername = (minLength: number): string => generateString(minLength)

export const generateFullName = (minLength: number, maxLength: number): string => {
	const firstName = capitalize(generateString(minLength, maxLength))
	const lastName = capitalize(generateString(minLength, maxLength))
	return `${firstName} ${lastName}`
}
