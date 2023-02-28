function getMaxSubSum(arr) {
    if (!arr.filter(n => n > 0).length) return 0

    let sum = 0
    let result = 0

    for (let item of arr) {
        sum += item

        if (result < sum) {
            result = sum
        }

        if (sum < 0) {
            sum = 0
        }
    }

    return result
}

console.log( getMaxSubSum([-1, -2, 3, -9]) ) // 3
console.log( getMaxSubSum([2, -1, 2, 3, -9]) ) // 6
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ) // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ) // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ) // 100
console.log( getMaxSubSum([1, 2, 3]) ) // 6