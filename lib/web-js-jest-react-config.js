"use strict";

const eslintCompat = require('@eslint/compat')
const globals = require('globals')
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const jsJestConfig = require('./js-jest-config.js')

const webJsJestReactConfig = [
  { 
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      ...reactPlugin.configs.flat.recommended.languageOptions,
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: Object.freeze({ ...jsJestConfig.plugins, react: reactPlugin, 'react-hooks': eslintCompat.fixupPluginRules(reactHooksPlugin), }),
    rules: Object.freeze({
      ...jsJestConfig.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
    }),
  },
  {
    files: ['**/*.{spec,test}.{js,jsx}'],
    plugins: Object.freeze({ ...jsJestConfig.plugins, react: reactPlugin, 'react-hooks': eslintCompat.fixupPluginRules(reactHooksPlugin), ...jsJestConfig.jestPlugins, }),
    rules: Object.freeze({
      ...jsJestConfig.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...jsJestConfig.jestRules,
    }),
  },
  require('eslint-plugin-prettier/recommended'),
  { settings: { react: { version: "detect" } } },
]

module.exports = webJsJestReactConfig

