"use strict";

const jest = require('eslint-plugin-jest')
const jsJestConfig = require('./js-jest-config.js')

const { configs, plugin, parser } = require('typescript-eslint')

const tsJestConfig = Object.freeze({
  languageOptions: { parserOptions: { parser } },
  plugins: Object.freeze({ ...jsJestConfig.plugins, '@typescript-eslint': plugin, }),
  rules: Object.freeze({
    ...jsJestConfig.rules,
    ...configs.recommended.find(config => config.name === 'typescript-eslint/recommended').rules,
  }),
  jestRules: Object.freeze({
    ...jest.configs['flat/recommended'].rules
  }),
  jestPlugins: Object.freeze({ jest: jest, }),
})

module.exports = tsJestConfig
