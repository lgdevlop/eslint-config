import { ESLint } from 'eslint'

function createESLintInstance(overrideConfig, cwd) {
    return new ESLint({
        cwd,
        overrideConfigFile: true,
        overrideConfig,
    })
}

async function lintFiles(eslint, filePaths) {
    const results = await eslint.lintFiles(filePaths)

    return results
}

export async function runLintFiles(filePaths, config, directoryPath) {
    const eslint = createESLintInstance(config, directoryPath)
    return await lintFiles(eslint, filePaths)
}

export function hasLintError(results) {
    return results.reduce((acc, result) => acc + result.errorCount + result.warningCount, 0)
}

export function getRuleIdFromMessage(results, ruleId) {
    return results.reduce((acc, result) => {
        const message = result.messages.find(message => {
            return message.ruleId === ruleId
        })

        return message?.ruleId === ruleId ? message.ruleId : acc
    }, '')
}
