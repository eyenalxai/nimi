import { describe, expect, test } from "bun:test"
import {
  capitalize,
  generateFullName,
  generateFullNames,
  generateUsername,
  generateUsernames,
} from "./generate"
import { syllables } from "./syllables"

const always = (value: number) => () => value
const lowest = always(0)
const highest = always(0.999999)

const titleCase = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

describe("syllable corpus", () => {
  test("is a non-empty list of non-empty strings", () => {
    expect(syllables.length).toBeGreaterThan(0)
    for (const syllable of syllables) {
      expect(syllable.length).toBeGreaterThan(0)
    }
  })
})

describe("capitalize", () => {
  test("uppercases the first character only", () => {
    expect(capitalize("nimi")).toBe("Nimi")
    expect(capitalize("NIMI")).toBe("NIMI")
    expect(capitalize("")).toBe("")
  })
})

describe("generateUsername", () => {
  test("builds a username from exactly min syllables, deterministically", () => {
    expect(generateUsername({ min: 3, random: lowest })).toBe(
      syllables[0].repeat(3)
    )
  })

  test("uses the max available syllable when randomness is high", () => {
    expect(generateUsername({ min: 5, random: highest })).toBe(
      syllables.at(-1)!.repeat(5)
    )
  })
})

describe("generateUsernames", () => {
  test("returns exactly count usernames", () => {
    expect(
      generateUsernames({ count: 10, min: 3, random: lowest })
    ).toHaveLength(10)
  })

  test("every username has at least min characters", () => {
    for (const username of generateUsernames({ count: 25, min: 4 })) {
      expect(username.length).toBeGreaterThanOrEqual(4)
    }
  })
})

describe("generateFullName", () => {
  test("is two title-cased syllables joined by a space", () => {
    expect(generateFullName({ min: 1, max: 1, random: lowest })).toBe(
      `${titleCase(syllables[0])} ${titleCase(syllables[0])}`
    )
  })

  test("honours the max bound of each word", () => {
    const [first, last] = generateFullName({
      min: 2,
      max: 4,
      random: highest,
    }).split(" ")
    expect(first).toBe(titleCase(syllables.at(-1)!.repeat(4)))
    expect(last).toBe(titleCase(syllables.at(-1)!.repeat(4)))
  })
})

describe("generateFullNames", () => {
  test("returns exactly count names", () => {
    expect(
      generateFullNames({ count: 10, min: 1, max: 3, random: lowest })
    ).toHaveLength(10)
  })

  test("every name is two words, each title-cased", () => {
    for (const name of generateFullNames({ count: 20, min: 1, max: 3 })) {
      const words = name.split(" ")
      expect(words).toHaveLength(2)
      for (const word of words) {
        expect(word.charAt(0)).toBe(word.charAt(0).toUpperCase())
      }
    }
  })
})
