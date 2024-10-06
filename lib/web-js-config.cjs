"use strict";

const jsConfig = require('./js-config.cjs')

const webJsConfig = [
  { languageOptions: { globals: require('globals').browser } },
  {
    files: ['**/*.js'],
    plugins: jsConfig.plugins,
    rules: {
      ...jsConfig.rules,
    },
  },
  require('eslint-plugin-prettier/recommended'),
]

module.exports = webJsConfig

