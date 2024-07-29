"use strict";

const jsConfig = require('./js-config.js')

const { configs, plugin, parser } = require('typescript-eslint')

const tsConfig = Object.freeze({
  languageOptions: { parserOptions: { parser } },
  plugins: Object.freeze({ ...jsConfig.plugins, '@typescript-eslint': plugin, }),
  rules: Object.freeze({
    ...jsConfig.rules,
    ...configs.recommended.find(config => config.name === 'typescript-eslint/recommended').rules,
  }),
})

module.exports = tsConfig
