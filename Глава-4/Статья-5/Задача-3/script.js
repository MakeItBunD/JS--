function Accumulator(startValue) {
    this.value = startValue

    this.read = function() {
        this.value += +prompt('Введите число', 0)
    }
}

let accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); 