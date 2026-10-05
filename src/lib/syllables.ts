import { aToC } from "./syllables-data/a-c"
import { dToG } from "./syllables-data/d-g"
import { hToM } from "./syllables-data/h-m"
import { nToR } from "./syllables-data/n-r"
import { sToZ } from "./syllables-data/s-z"

// Split into alphabet ranges so no single file exceeds the max-lines limit.
const syllables = [...aToC, ...dToG, ...hToM, ...nToR, ...sToZ]

export { syllables }
