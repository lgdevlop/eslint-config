"use strict";

const globals = require('globals')
const tsJestConfig = require('./ts-jest-config.js')

const webTsJestConfig = [
  { languageOptions: { globals: { ...globals.browser, ...globals.jest }, ...tsJestConfig.languageOptions } },
  {
    files: ['**/*.{js,ts}'],
    plugins: tsJestConfig.plugins,
    rules: {
      ...tsJestConfig.rules,
    },
  },
  {
    files: ['**/*.{spec,test}.{js,ts}'],
    plugins: { ...tsJestConfig.plugins, ...tsJestConfig.jestPlugins, },
    rules: {
      ...tsJestConfig.rules,
      ...tsJestConfig.jestRules,
    },
  },
  require('eslint-plugin-prettier/recommended'),
]

module.exports = webTsJestConfig

