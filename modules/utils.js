// define a function that capitalizes the first letter of a word
function capitalizeFirstLetter(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function sayWord(word){
    console.log(`SAT IT LOUD: ${word}`)
}

function addNumbers(num1, num2){
    return num1 + num2
}
module.exports = {capitalizeFirstLetter, sayWord, addNumbers}