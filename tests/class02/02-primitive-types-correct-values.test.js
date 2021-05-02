import { primitiveTypes } from '../../src/class02/02-primitive-types'
import { handleLogTest } from '../../utils/handle-log'
import { types, lesson } from './util'



(() => {
    let logProps = {
        lesson,
        testName: 'CHECK IF (primitiveTypes) HAS CORRECT VALUES',
        testSuccess: true,
        tip: ""
    }

    for (let t of types) {
        if (!primitiveTypes.includes(t)) {
            logProps = {
                ...logProps,
                testSuccess: false,
                tip: "YOU DID NOT REPORT ALL PRIMITIVE TYPES"
            }
        }
    }

    handleLogTest(logProps)
})()
