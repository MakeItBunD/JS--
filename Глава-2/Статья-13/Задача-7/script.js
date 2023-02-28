const n = prompt('Введите интвервал', '')

for (let i = 2; i <= n; i++) {
    let isPrime = true

    let j = 2
    while (isPrime) {
        if (i === j) {
            alert(i)
            break
        }
        
        if (i % j == 0) {
            isPrime = false
        } 
        else {
            j++
        }
    }
}