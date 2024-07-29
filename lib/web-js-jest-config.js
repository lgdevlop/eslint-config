"use strict";

const globals = require('globals')
const jsJestConfig = require('./js-jest-config.js')

const webJsConfig = [
  { languageOptions: { globals: { ...globals.browser, ...globals.jest } } },
  {
    files: ['**/*.js'],
    plugins: jsJestConfig.plugins,
    rules: {
      ...jsJestConfig.rules,
    },
  },
  {
    files: ['**/*.{spec,test}.js'],
    plugins: { ...jsJestConfig.plugins, ...jsJestConfig.jestPlugins, },
    rules: {
      ...jsJestConfig.rules,
      ...jsJestConfig.jestRules,
    },
  },
  require('eslint-plugin-prettier/recommended'),
]

module.exports = webJsConfig

