function f(a, b) {
    console.log( a + b );
}

Function.prototype.defer = function(ms) {
    return (...args) => setTimeout(this, ms, ...args)
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.