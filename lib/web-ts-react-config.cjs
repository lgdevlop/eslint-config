"use strict";

const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const eslintCompat = require('@eslint/compat')
const tsConfig = require('./ts-config.cjs')

const webTsReactConfig = [
  { languageOptions: { globals: require('globals').browser, ...reactPlugin.configs.flat.recommended.languageOptions, ...tsConfig.languageOptions }, },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: Object.freeze({ ...tsConfig.plugins, react: reactPlugin, 'react-hooks': eslintCompat.fixupPluginRules(reactHooksPlugin), }),
    rules: Object.freeze({
      ...tsConfig.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
    }),
  },
  require('eslint-plugin-prettier/recommended'),
  { settings: { react: { version: "detect" } } },
]

module.exports = webTsReactConfig

