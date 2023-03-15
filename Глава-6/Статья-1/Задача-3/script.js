// Рекурсия работает плохо!
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// Так лучше:
function fib(n) { 
    let arr = [];

    for (let i = 0; i < n; i++) {
        if (arr.length < 2) {
            arr.push(1);
        } else {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    }

    return arr[arr.length - 1];
}

// Можно и так:
function fib(n) { 

    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = b + a;
        a = b;
        b = c;
    }

    return b
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757