import { getFullnames, getUsernames } from "@/lib/get"
import { unstable_cache } from "next/cache"

export const getCachedFullnames = unstable_cache(getFullnames, ["fullnames"], { tags: ["fullnames"] })

export const getCachedUsernames = unstable_cache(getUsernames, ["usernames"], { tags: ["usernames"] })
