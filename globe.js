const path = require('node:path')
//to get the path of the file
let filepath = path.dirname(__filename)

console.log(filepath)

//using require to import a module we create
const myFunction = require('./modules/utils')
let word = myFunction.capitalizeFirstLetter('hello')

console.log(word)

