"use strict";

const jsConfig = Object.freeze({
  plugins: Object.freeze({
    unicorn: require('eslint-plugin-unicorn'),
    prettier: require('eslint-plugin-prettier'),
  }),
  rules: Object.freeze({
    ...require('@eslint/js').configs.recommended.rules,
    complexity: ['error', 2],
    'unicorn/better-regex': 'error',
    'unicorn/prefer-module': 'off',
    'max-lines': ['error', 80],
    'unicorn/filename-case': [
        'error',
        {
            case: 'kebabCase',
            ignore: ['.+\\.(j|t)sx$'],
        },
    ],
  }),
})

module.exports = jsConfig
