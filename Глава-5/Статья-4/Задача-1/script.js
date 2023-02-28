let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // Выведится 4, потому что
// массивы как и обьекты не копируются полностью,
// а копируют лишь ссылку на один и тот же массив.
// Поэтому когда мы изменяем массив shoppingCart,
// изменяется и fruits