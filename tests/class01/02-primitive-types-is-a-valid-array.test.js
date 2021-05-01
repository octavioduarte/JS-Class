import { primitiveTypes } from '../../src/class01/02-primitive-types'
import { handleLogTest } from '../../utils/handle-log'
import { lesson} from './util'



(() => {
    let logProps = {
        lesson,
        testName: 'CHECK IF (primitiveTypes) IS A VALID ARRAY',
        testSuccess: true,
        tip: ""
    }

    if (!Array.isArray(primitiveTypes)) {
        logProps = {
            ...logProps,
            testSuccess: false,
            tip: '(primitiveTypes) IS NOT A VALID ARRAY'
        }
    } else {
        logProps = {
            ...logProps,
            testSuccess: true,
        }
    }



    handleLogTest(logProps)
})()






