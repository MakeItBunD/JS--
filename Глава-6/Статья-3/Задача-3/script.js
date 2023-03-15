let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi(); // Ошибка, функция обьявленна внутри блока if
// глобальное лексическое окружение не имеет к нему доступ