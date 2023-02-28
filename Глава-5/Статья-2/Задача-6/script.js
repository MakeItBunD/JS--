// Было моим решением, но оказалось что оно не совсем корректное
// function randomInteger(min, max) {
//     return  Math.round(Math.random() * (max - min) + min);
// }

// Лучше делать так:
function randomInteger(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );
}

console.log( randomInteger(1, 5) )