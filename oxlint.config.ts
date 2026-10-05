import type { OxlintConfig } from "oxlint"

import { defineConfig } from "oxlint"

type PluginConfig = NonNullable<OxlintConfig["plugins"]>
type RuleConfig = NonNullable<OxlintConfig["rules"]>
type SettingsConfig = NonNullable<OxlintConfig["settings"]>
type OverridesConfig = NonNullable<OxlintConfig["overrides"]>

const plugins: PluginConfig = [
  "typescript",
  "unicorn",
  "oxc",
  "promise",
  "import",
  "node",
  "react",
  "react-perf",
]

const categories: NonNullable<OxlintConfig["categories"]> = {
  correctness: "error",
  suspicious: "error",
  perf: "error",
  pedantic: "error",
  style: "error",
  restriction: "error",
}

const baseRules: RuleConfig = {
  "node/no-top-level-await": "off", // We don't care about CJS
  "unicorn/max-nested-calls": "off", // I don't like it
  "unicorn/prefer-export-from": "off", // I don't like it
  "node/callback-return": "off", // Results in false positives
  "typescript/prefer-readonly-parameter-types": "off",
  "typescript/explicit-function-return-type": "off",
  "typescript/explicit-module-boundary-types": "off",
  "typescript/consistent-type-definitions": ["error", "type"],
  "unicorn/prefer-global-this": "off",
  "func-style": ["error", "expression"],
  "no-magic-numbers": "off",
  "oxc/no-optional-chaining": "off",
  "oxc/no-rest-spread-properties": "off",
  "oxc/no-async-await": "off",
  "unicorn/no-null": "off",
  "sort-imports": "off",
  "no-undefined": "off",
  "max-statements": "off",
  "unicorn/no-process-exit": "off",
  "no-ternary": "off",
  "no-continue": "off",
  "prefer-destructuring": "off",
  "one-var": "off",
  "no-console": "error",
  "no-warning-comments": "off",
  "max-params": "off",
  "max-lines-per-function": "off",
  "id-length": "off",
  "no-inline-comments": "off",
  "unicorn/no-array-reduce": "error",
  "no-use-before-define": "error",
  "no-redeclare": "off", // TODO: enable later
  "no-multi-assign": "off", // TODO: enable later
  "no-useless-return": "error",
  "no-duplicate-imports": "off", // Does not work with oxfmt, yikes
  "no-void": "off",
  "typescript/explicit-member-accessibility": "off",
  complexity: "error",
  "max-classes-per-file": "off",
  "new-cap": "error",
  "require-await": "off", // This rule is inferior to the type-aware typescript/require-await rule.
  "no-plusplus": "error",
  "init-declarations": "error",
  "sort-keys": "off", // Breaks TanStack Query mutation context inference by reordering callbacks.
  "oxc/erasing-op": "error",
  "no-nested-ternary": "off",
  "unicorn/no-nested-ternary": "off",
  "typescript/use-unknown-in-catch-callback-variable": "error",
  "typescript/no-non-null-assertion": "error",
  "typescript/no-confusing-void-expression": "error",
  "oxc/no-map-spread": "off", // Keeping spread: Object.assign alternative causes accidental mutability
  "unicorn/no-await-expression-member": "error",
  "no-empty-function": "error",
  "unicorn/no-useless-collection-argument": "error",
  "unicorn/prefer-ternary": "error",
  "no-negated-condition": "error",
  "typescript/array-type": "error",
  "typescript/unified-signatures": "error",
  "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: true }],
  "import/prefer-default-export": "off",
  "import/no-namespace": "off", // Breaks Zod's recommended `import * as z from "zod"` style.
  "import/no-named-export": "off",
  "import/no-named-default": "error",
  "promise/prefer-await-to-then": "error",
  "import/group-exports": "error",
  "promise/prefer-await-to-callbacks": "off", // We like neverthrow match statements.
  "node/no-process-env": "error",
  "import/exports-last": "error",
  "import/max-dependencies": "off", // A lot of dependencies is fine if complexity is fine.
  "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
  "typescript/no-import-type-side-effects": "error",
  "import/no-relative-parent-imports": "error",
  "import/unambiguous": "error",
  "oxc/no-barrel-file": "error",
  "import/first": "error",
  "promise/avoid-new": "off", // Callback-only APIs need promise adapters; this rule encourages behavior-changing rewrites.
  "import/no-nodejs-modules": "off", // Frontend workspaces are full-stack; accidental client Node imports are easy to spot.
  "import/no-default-export": "error",
  "typescript/parameter-properties": "error",
  "unicorn/custom-error-definition": "error",
}

const frontendRules: RuleConfig = {
  "react/function-component-definition": "off",
  "react/exhaustive-effect-dependencies": "off", // TODO: enable later
  "react/todo": "off", // TODO: enable later (React Compiler unsupported syntax like try/finally, ??=)
  "react/jsx-no-literals": "off",
  "react/react-in-jsx-scope": "off",
  "react/jsx-filename-extension": "off",
  "react-perf/jsx-no-new-function-as-prop": "off",
  "react/jsx-max-depth": "off",
  "react-perf/jsx-no-new-array-as-prop": "off",
  "react-perf/jsx-no-new-object-as-prop": "error",
  "react/no-children-prop": "error",
  "react-perf/jsx-no-jsx-as-prop": "off",
  "react/jsx-handler-names": "off",
  "react/only-export-components": "off",
  "react/jsx-props-no-spreading": "off",
  "react/no-multi-comp": "off",
  "react/hook-use-state": "off",
  "react/forbid-component-props": "off",
}

const settings: SettingsConfig = {
  react: {
    version: "19.2.5",
  },
}

const ignorePatterns = [
  "**/node_modules/**",
  "**/dist/**",
  "**/.output/**",
  "**/.nitro/**",
  "**/.tanstack/**",
  "**/drizzle/**",
  "**/*.d.ts",
  "**/*.config.{js,ts,mjs,cjs}",
  "**/tsconfig.tsbuildinfo",
  "src/routeTree.gen.ts",
  "src/components/ui/**",
  ".railway/**",
]

const overrides: OverridesConfig = [
  {
    files: ["src/routes/**/*.{ts,tsx}"],
    rules: {
      // TanStack Router redirects are thrown control-flow values, not Errors.
      "typescript/only-throw-error": "off",
    },
  },
]

export default defineConfig({
  plugins,
  categories,
  rules: {
    ...baseRules,
    ...frontendRules,
  },
  overrides,
  env: {
    builtin: true,
  },
  settings,
  ignorePatterns,
})
