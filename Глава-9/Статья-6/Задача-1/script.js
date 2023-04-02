function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true

// Возвращает true из-за того что прототипы классов A и B 
// были приведены к пустому обьекту

console.log(a.__proto__, B.prototype) // {} === {} true

