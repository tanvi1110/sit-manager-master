const config = {
  singleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  cursorOffset: -1,
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  importOrder: ["^components/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

module.exports = config;
