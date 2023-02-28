function sumInput() {
  let arr = [];
  let result = 0;

  while (true) {
    let num = prompt('Введите число', '');

    if (num === "" || num === null || !isFinite(num)) break;

    arr.push(num)
  }

  for (let item of arr) {
    result += +item
  }

  return result
}

alert( sumInput() )