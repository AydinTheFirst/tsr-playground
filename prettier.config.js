//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  bracketSpacing: true,
  arrowParens: 'always',
  proseWrap: 'always',
  singleAttributePerLine: true,
};

export default config;
