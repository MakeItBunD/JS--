function factorial(n) {
    return n === 1 ? n : n * factorial(--n);
}

console.log( factorial(5) ); // 120