// 1 вариант:
// function sumTo(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result += i;
//     }
//     return result;
// }
// console.log( sumTo(100) );

// 2 вариант:
// function sumTo(n) {
//     return n < 1 ? n : n + sumTo(--n);
// }
// console.log( sumTo(100) ); 
// console.log( sumTo(100000) ); Нельзя

// 3 вариант: 
function sumTo(n) {
    return n * (n + 1) / 2
}
console.log( sumTo(100) ); // 5050