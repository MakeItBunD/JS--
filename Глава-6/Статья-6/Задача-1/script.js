// Свойство функции:
// function makeCounter() {
//     counter.count = 0;

//     function counter() {
//         counter.set = value => counter.count = value;

//         counter.decrease = () => counter.count--;

//         return counter.count++;
//     }

//     return counter;
// }

// Замыкание:
function makeCounter() {
    let count = 0;

    function counter() {
        counter.set = value => count = value;

        counter.decrease = () => count--;

        return count++;
    }

    return counter;
}
  
let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10); // установить новое значение счётчика

console.log( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() ); // 10 (вместо 11)
