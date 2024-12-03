import { syllables } from "@/lib/syllables"

export const capitalize = (str: string) =>
	str.charAt(0).toUpperCase() + str.slice(1)

const generateRandomNumber = (min: number, max: number) =>
	min +
	Math.floor(
		(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) *
			(max - min + 1)
	)

const generateString = (minLength: number, maxLength?: number) => {
	const length = generateRandomNumber(minLength, maxLength ?? minLength)
	return Array.from(
		{ length },
		() => syllables[generateRandomNumber(0, syllables.length - 1)]
	).join("")
}

export const generateUsername = (minLength: number) => generateString(minLength)

export const generateFullName = (minLength: number, maxLength: number) =>
	`${capitalize(generateString(minLength, maxLength))} ${capitalize(generateString(minLength, maxLength))}`
