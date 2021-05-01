import { CLIcolors } from './console-colors'

export const handleLogTest = (logProps) => {
    const { lesson, testName, testSuccess, tip } = logProps

    const fontColor = testSuccess ? CLIcolors.green : CLIcolors.red
    const icon = testSuccess ? '✅' : '❌'
    const tipMessage = tip ? `[${tip}]` : ''

    console.log(fontColor, `(${lesson})`, testName, icon, tipMessage)
}