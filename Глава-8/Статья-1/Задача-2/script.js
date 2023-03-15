let head = {
    glasses: 1
};
  
let table = {
    pen: 3,
    __proto__: head
};
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
  
let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.pen)
console.log(bed.glasses)

// pockets.glasses vs head.glasses (head.glasses win)
// pockets.glasses не найдёт свойства glasses в обьекте
// pockets и будет искать в прототипе bed
// там тоже не найдёт и пойдёт дальше по цепочке наследования
// в прототип table, но там тоже нету, придётся искать в 
// head. Тут то уже найдёт и выведет консоль, но цепочка поиска
// займёт гараздо больше времени чем head.glasses
// Но оказывается источник нам говорит что разницы для современных
// движков почти нет