// Более универсальный вариант
// function extractCurrencyValue(str) {
//     let newStr = ''

//     for (let char of str) {
//         if (isFinite(char)) {
//             newStr += char 
//         } 
//     }

//     return +newStr
// }

// Если же следовать строго данной задачи, то подойдёт и такой варинт:
function extractCurrencyValue(str) {
    return +str.slice(1)
}

console.log( extractCurrencyValue('$120') )