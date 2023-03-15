function f(x) {
    console.log(x);
}

function delay(func, del) {
    return function(...args) {
        setTimeout(() => func.apply(this, args), del);
    };
}
  
// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс