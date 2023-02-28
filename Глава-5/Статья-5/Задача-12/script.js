// Немного читерства и забеганий вперед
function unique(arr) {
    return [...new Set(arr)];
}

// Но пожалуй реализую и подругому
function unique(arr) {
    const result = [];

    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item)
        }
    }

    return result
}
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O