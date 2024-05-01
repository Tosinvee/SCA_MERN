let greeting = 'hello world'

console.log(`${greeting} from global console`)

//you can create your own logger yourself
//the logger was created from the global console 
const { stdin, stdout} = require('process')
const logger = new console.Console(stdout, stdin);

logger.log(`${greeting} from created console`)

const {Console} = require('node:console')

const anotherConsole = new Console(stdout, stdin)
anotherConsole.log(`${greeting} from another console`)