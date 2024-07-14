const path = require("path");

const buildNextEslintCommand = (filenames) =>
  `yarn next:lint --fix --file ${filenames
    .map((f) => path.relative(path.join("packages", "nextjs"), f))
    .join(" --file ")}`;

const builtSvelteEslintCommand = (filenames) =>
  `yarn svelte:lint --fix --file ${filenames
    .map((f) => path.relative(path.join("packages", "svelte"), f))
    .join(" --file ")}`;

const checkTypesSvelteCommand = () => "yarn svelte:check";

const checkTypesNextCommand = () => "yarn next:check-types";

const buildHardhatEslintCommand = (filenames) =>
  `yarn hardhat:lint-staged --fix ${filenames
    .map((f) => path.relative(path.join("packages", "hardhat"), f))
    .join(" ")}`;

module.exports = {
  "packages/nextjs/**/*.{ts,tsx}": [
    //buildNextEslintCommand,
    checkTypesNextCommand,
  ],
  "packages/svelte/**/*.{ts,tsx}": [
    // TODO: Figure out Prettier formatting error
    // builtSvelteEslintCommand,
    checkTypesSvelteCommand,
  ],
  "packages/hardhat/**/*.{ts,tsx}": [buildHardhatEslintCommand],
};
