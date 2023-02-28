function pow(x, n) {
    return x**n
}

const x = prompt('Введите число', '')
const n = prompt('Введите степень', '')

n < 1 ? alert('Степень не поддерживается') : alert(pow(x, n))