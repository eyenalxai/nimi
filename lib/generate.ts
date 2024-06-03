import { syllables } from "@/lib/syllables"
import { capitalize } from "@/lib/utils"

const generateRandomNumber = (min: number, max: number) =>
	min + Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) * (max - min + 1))

const generateString = (minLength: number, maxLength: number = minLength): string =>
	Array.from(
		{ length: generateRandomNumber(minLength, maxLength) },
		() => syllables[generateRandomNumber(0, syllables.length - 1)]
	).join("")

export const generateUsername = (minLength: number): string => generateString(minLength)

export const generateFullName = (minLength: number, maxLength: number): string =>
	`${capitalize(generateString(minLength, maxLength))} ${capitalize(generateString(minLength, maxLength))}`
