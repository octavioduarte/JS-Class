import { truthTables } from '../../src/class03/02-truth-table'
import { handleLogTest } from '../../utils/handle-log'
import { truthTableAnswers, lesson } from './util'

(() => {
    let logProps = {
        lesson,
        testName: 'CHECK IF (truth table) HAS CORRECT VALUES',
        testSuccess: true,
        tip: ""
    }

    for (let i = 0 ; i < truthTables.length ; i++ ) {
        const table = truthTables[i]
        if (table !== truthTableAnswers[i]) {
            logProps = {
                ...logProps,
                testSuccess: false,
                tip: '(truth table) IS INCORRECT'
            }
        }
    }

    handleLogTest(logProps)
})()