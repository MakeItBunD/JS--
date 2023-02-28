function aclean(arr) {
    let sortedArr = arr.map(item => item.toLowerCase().split('').sort().join(''));
    let set = [...new Set(sortedArr)];
    let result = [];

    for (let i = 0; i < sortedArr.length; i++) {
        if (set.includes(sortedArr[i]) && !result.find(item => item.toLowerCase().split('').sort().join('') == sortedArr[i])) {
            result.push(arr[i])
        }
    }

    return result
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"