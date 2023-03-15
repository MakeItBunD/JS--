let animal = {
    eat() {
        this.full = true;
    }
};
  
let rabbit = {
    __proto__: animal
};

rabbit.eat();

// Свойство получит rabbit

console.log(rabbit.full) // true
console.log(animal.full) // undefined