"use strict";

const jest = require('eslint-plugin-jest')
const jsConfig = require('./js-config.cjs')

const jsJestConfig = Object.freeze({
  plugins: Object.freeze({ ...jsConfig.plugins, }),
  rules: Object.freeze({ ...jsConfig.rules, }),
  jestRules: Object.freeze({
    ...jest.configs['flat/recommended'].rules
  }),
  jestPlugins: Object.freeze({ jest: jest, }),
})

module.exports = jsJestConfig
