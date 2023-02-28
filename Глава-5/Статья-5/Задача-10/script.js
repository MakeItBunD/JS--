// Опять же мой варинт как оказалось не очень хорош((
// function shuffle(arr) {
//     arr.sort((a, b) => Math.random() < Math.random() ? 1 : -1)
// }

// Интересный вариант!
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr)

shuffle(arr);
console.log(arr)

shuffle(arr);
console.log(arr)