import { syllables } from "./syllables"

export type RandomSource = () => number

/**
 * Default randomness source. Works in the browser and in Bun/Node because
 * `crypto.getRandomValues` is a global web-standard API.
 */
const cryptoRandom: RandomSource = () => {
  const [value] = crypto.getRandomValues(new Uint32Array(1))
  return value / 0x1_0000_0000
}

export const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1)

type RandomIntOptions = {
  min: number
  max: number
}

const randomInt = (random: RandomSource, { min, max }: RandomIntOptions) =>
  min + Math.floor(random() * (max - min + 1))

type GenerateStringOptions = {
  min: number
  max?: number
  random: RandomSource
}

const generateString = ({ min, max, random }: GenerateStringOptions) => {
  const length = randomInt(random, { min, max: max ?? min })
  return Array.from(
    { length },
    () =>
      syllables[randomInt(random, { min: 0, max: syllables.length - 1 })]
  ).join("")
}

export type GenerateUsernameOptions = {
  min: number
  random?: RandomSource
}

export type GenerateUsernamesOptions = {
  count: number
  min: number
  random?: RandomSource
}

export type GenerateFullNameOptions = {
  min: number
  max: number
  random?: RandomSource
}

export type GenerateFullNamesOptions = {
  count: number
  min: number
  max: number
  random?: RandomSource
}

export const generateUsername = ({
  min,
  random = cryptoRandom,
}: GenerateUsernameOptions) => generateString({ min, random })

export const generateUsernames = ({
  count,
  min,
  random = cryptoRandom,
}: GenerateUsernamesOptions) =>
  Array.from({ length: count }, () => generateUsername({ min, random }))

export const generateFullName = ({
  min,
  max,
  random = cryptoRandom,
}: GenerateFullNameOptions) =>
  `${capitalize(generateString({ min, max, random }))} ${capitalize(
    generateString({ min, max, random })
  )}`

export const generateFullNames = ({
  count,
  min,
  max,
  random = cryptoRandom,
}: GenerateFullNamesOptions) =>
  Array.from({ length: count }, () => generateFullName({ min, max, random }))
