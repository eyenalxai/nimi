import { syllables } from "@/lib/syllables"

const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

const generateRandomNumber = (min: number, max: number) =>
	min + Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) * (max - min + 1))

const generateString = (minLength: number, maxLength: number = minLength): string =>
	Array.from(
		{ length: generateRandomNumber(minLength, maxLength) },
		() => syllables[generateRandomNumber(0, syllables.length - 1)]
	).join("")

export const generateUsername = (minLength: number): string => generateString(minLength)

export const generateFullName = (minLength: number, maxLength: number): string => {
	const firstName = capitalize(generateString(minLength, maxLength))
	const lastName = capitalize(generateString(minLength, maxLength))
	return `${firstName} ${lastName}`
}
