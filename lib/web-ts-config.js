"use strict";

const tsConfig = require('./ts-config.js')

const webTsConfig = [
  { languageOptions: { globals: require('globals').browser, ...tsConfig.languageOptions } },
  {
    files: ['**/*.{js,ts}'],
    plugins: tsConfig.plugins,
    rules: {
      ...tsConfig.rules,
    },
  },
  require('eslint-plugin-prettier/recommended'),
]

module.exports = webTsConfig

