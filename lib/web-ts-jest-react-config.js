"use strict";

const eslintCompat = require('@eslint/compat')
const globals = require('globals')
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const tsJestConfig = require('./ts-jest-config.js')

const webTsJestReactConfig = [
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
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: Object.freeze({ ...tsJestConfig.plugins, react: reactPlugin, 'react-hooks': eslintCompat.fixupPluginRules(reactHooksPlugin), }),
    rules: Object.freeze({
      ...tsJestConfig.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
    }),
  },
  {
    files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
    plugins: Object.freeze({ ...tsJestConfig.plugins, react: reactPlugin, 'react-hooks': eslintCompat.fixupPluginRules(reactHooksPlugin), ...tsJestConfig.jestPlugins, }),
    rules: Object.freeze({
      ...tsJestConfig.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tsJestConfig.jestRules,
    }),
  },
  require('eslint-plugin-prettier/recommended'),
  { settings: { react: { version: "detect" } } },
]

module.exports = webTsJestReactConfig

