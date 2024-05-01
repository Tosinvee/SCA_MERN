const path = require('node:path')
//to get the path of the file
let filepath = path.dirname(__filename)

console.log(filepath)

//using require to import a module we create
const myFunction = require('./modules/utils')
let word = myFunction.capitalizeFirstLetter('hello')

console.log(word)

myFunction.sayWord('she code africa')
//another way to import a module using {}
const{addNumbers} = require('./modules/utils')
console.log(addNumbers(2,5))


const data = require('./data/users.json')
console.log(data)
