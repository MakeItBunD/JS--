// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);

// После вызова функции
console.log(menu)

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2
        }
    }
}