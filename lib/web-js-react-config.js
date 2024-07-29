"use strict";

const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const eslintCompat = require('@eslint/compat')
const jsConfig = require('./js-config.js')

const webJsReactConfig = [
  { languageOptions: { globals: require('globals').browser, ...reactPlugin.configs.flat.recommended.languageOptions, }, },
  {
    files: ['**/*.{js,jsx}'],
    plugins: Object.freeze({ ...jsConfig.plugins, react: reactPlugin, 'react-hooks': eslintCompat.fixupPluginRules(reactHooksPlugin), }),
    rules: Object.freeze({
      ...jsConfig.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
    }),
  },
  require('eslint-plugin-prettier/recommended'),
  { settings: { react: { version: "detect" } } },
]

module.exports = webJsReactConfig

