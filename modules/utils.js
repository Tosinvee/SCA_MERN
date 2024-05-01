// define a function that capitalizes the first letter of a word
function capitalizeFirstLetter(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}
module.exports = {capitalizeFirstLetter}