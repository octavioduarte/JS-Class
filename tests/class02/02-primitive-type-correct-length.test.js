import { primitiveTypes } from '../../src/class02/01-primitive-types'
import { handleLogTest } from '../../utils/handle-log'
import { types, lesson } from './util'



(() => {
    let logProps = {
        lesson,
        testName: 'CHECK IF (primitiveTypes) HAS CORRECT LENGTH',
        testSuccess: true,
        tip: ""
    }

    const correctLength = types.length
    const primitiveTypesLength = primitiveTypes.length


    if (primitiveTypesLength !== correctLength) {
        logProps = {
            ...logProps,
            testSuccess: false,
            tip: `YOU REPORTED ${primitiveTypesLength} - EXPECTED ${correctLength}`
        }
    } else {
        logProps = {
            ...logProps,
            testSuccess: true,
        }
    }



    handleLogTest(logProps)
})()
