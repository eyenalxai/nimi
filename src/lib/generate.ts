import { syllables } from "@/lib/syllables"

export const capitalize = (str: string) =>
	str.charAt(0).toUpperCase() + str.slice(1)

type GenerateRandomNumberOptions = {
	min: number
	max: number
}

const generateRandomNumber = ({ min, max }: GenerateRandomNumberOptions) =>
	min +
	Math.floor(
		(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) *
			(max - min + 1)
	)

type GenerateStringOptions = {
	min: number
	max?: number
}

const generateString = ({ min, max }: GenerateStringOptions) => {
	const length = generateRandomNumber({
		min,
		max: max ?? min
	})
	return Array.from(
		{ length },
		() =>
			syllables[
				generateRandomNumber({
					min: 0,
					max: syllables.length - 1
				})
			]
	).join("")
}

export const generateUsername = (min: number) => generateString({ min })

type GenerateFullNameOptions = {
	min: number
	max: number
}

export const generateFullName = ({ min, max }: GenerateFullNameOptions) =>
	`${capitalize(generateString({ min, max }))} ${capitalize(generateString({ min, max }))}`

type GenerateUsernamesOptions = {
	count: number
	minLength: number
}

export const generateUsernames = ({
	count,
	minLength
}: GenerateUsernamesOptions) =>
	Array.from({ length: count }, () => generateUsername(minLength))

type GenerateFullNamesOptions = {
	count: number
	min: number
	max: number
}

export const generateFullNames = ({
	count,
	min,
	max
}: GenerateFullNamesOptions) =>
	Array.from({ length: count }, () => generateFullName({ min, max }))
