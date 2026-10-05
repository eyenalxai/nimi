import { syllables } from "@/lib/syllables"

type RandomSource = () => number

type GenerateUsernameOptions = {
  min: number
  random?: RandomSource
}

type GenerateUsernamesOptions = {
  count: number
  min: number
  random?: RandomSource
}

type GenerateFullNameOptions = {
  min: number
  max: number
  random?: RandomSource
}

type GenerateFullNamesOptions = {
  count: number
  min: number
  max: number
  random?: RandomSource
}

const cryptoRandom: RandomSource = () => {
  const [value] = crypto.getRandomValues(new Uint32Array(1))
  return value / 0x1_00_00_00_00
}

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

const randomInt = (random: RandomSource, min: number, max: number) =>
  min + Math.floor(random() * (max - min + 1))

const generateString = (random: RandomSource, min: number, max: number) => {
  const length = randomInt(random, min, max)
  return Array.from({ length }, () => syllables[randomInt(random, 0, syllables.length - 1)]).join(
    "",
  )
}

const generateUsername = ({ min, random = cryptoRandom }: GenerateUsernameOptions) =>
  generateString(random, min, min)

const generateUsernames = ({ count, min, random = cryptoRandom }: GenerateUsernamesOptions) =>
  Array.from({ length: count }, () => generateUsername({ min, random }))

const generateFullName = ({ min, max, random = cryptoRandom }: GenerateFullNameOptions) =>
  `${capitalize(generateString(random, min, max))} ${capitalize(generateString(random, min, max))}`

const generateFullNames = ({ count, min, max, random = cryptoRandom }: GenerateFullNamesOptions) =>
  Array.from({ length: count }, () => generateFullName({ min, max, random }))

export {
  capitalize,
  generateFullName,
  generateFullNames,
  generateUsername,
  generateUsernames,
  type GenerateFullNameOptions,
  type GenerateFullNamesOptions,
  type GenerateUsernameOptions,
  type GenerateUsernamesOptions,
  type RandomSource,
}
