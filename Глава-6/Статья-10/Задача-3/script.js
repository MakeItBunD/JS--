function sayHi() {
    alert( this.name );
}

sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log( bound.test ); // undefined
// Потому что bound не имеет свойства с именем test

// Оно есть только у фунции sayHi
console.log(sayHi.test)