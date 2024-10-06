import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, test} from 'node:test'
import { equal } from 'node:assert'

import config from '../lib/web-ts-config.js'
import { getRuleIdFromMessage, hasLintError, runLintFiles } from '../eslint-integration-test.mjs'

const ACTUAL_PATH = path.dirname(fileURLToPath(import.meta.url))
const DIRECTORY_EXAMPLE_FILE_TO_LINT = path.resolve(ACTUAL_PATH, '..', 'sample-files-to-lint')
const MAXIMUM_ERROR_QUANTITY_JS_FILE = 3
const MAXIMUM_ERROR_QUANTITY_TS_FILE = 1

describe('Web TS config preset test suite', () => {
  test('Should detect eslint js recommended rule error', async () => {
    const expectedRuleId = 'no-constant-condition'
    const results = await runLintFiles(['eslint-js-recommended.js'], config, DIRECTORY_EXAMPLE_FILE_TO_LINT)
    const ruleId = getRuleIdFromMessage(results, expectedRuleId)
    const lintErrorQuantity = hasLintError(results)

    equal(ruleId, expectedRuleId)
    equal(lintErrorQuantity, MAXIMUM_ERROR_QUANTITY_JS_FILE)
  })

  test('Should detect prettier rule error', async () => {
    const expectedRuleId = 'prettier/prettier'
    const results = await runLintFiles(['eslint-js-recommended.js'], config, DIRECTORY_EXAMPLE_FILE_TO_LINT)
    const ruleId = getRuleIdFromMessage(results, expectedRuleId)
    const lintErrorQuantity = hasLintError(results)

    equal(ruleId, expectedRuleId)
    equal(lintErrorQuantity, MAXIMUM_ERROR_QUANTITY_JS_FILE)
  })

  test('Should detect unicorn rule error', async () => {
    const expectedRuleId = 'unicorn/better-regex'
    const results = await runLintFiles(['eslint-js-recommended.js'], config, DIRECTORY_EXAMPLE_FILE_TO_LINT)
    const ruleId = getRuleIdFromMessage(results, expectedRuleId)
    const lintErrorQuantity = hasLintError(results)

    equal(ruleId, expectedRuleId)
    equal(lintErrorQuantity, MAXIMUM_ERROR_QUANTITY_JS_FILE)
  })

  test('Should detect typescript/eslint recommended rule error', async () => {
    const expectedRuleId = '@typescript-eslint/no-unused-vars'
    const results = await runLintFiles(['eslint-ts-recommended.js'], config, DIRECTORY_EXAMPLE_FILE_TO_LINT)
    const ruleId = getRuleIdFromMessage(results, expectedRuleId)
    const lintErrorQuantity = hasLintError(results)

    equal(ruleId, expectedRuleId)
    equal(lintErrorQuantity, MAXIMUM_ERROR_QUANTITY_TS_FILE)
  })

  test('Should parse the typescript file with the type assertion correctly', async () => {
    const expectedRuleId = '@typescript-eslint/no-unused-vars'
    const results = await runLintFiles(['eslint-ts-type-assertion.ts'], config, DIRECTORY_EXAMPLE_FILE_TO_LINT)
    const ruleId = getRuleIdFromMessage(results, expectedRuleId)
    const lintErrorQuantity = hasLintError(results)

    equal(ruleId, expectedRuleId)
    equal(lintErrorQuantity, MAXIMUM_ERROR_QUANTITY_TS_FILE)
  })
})
