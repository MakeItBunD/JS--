function Calculator(str) {
    this.str = str
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }

    this.calculate = function(str) {
        str = str.split(' ')

        if (!this.methods[str[1]] || isNaN(str[0]) || isNaN(str[2])) {
            throw new Error('Некорректное выражение!')
        }

        return this.methods[str[1]](+str[0], +str[2])
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func
    }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8