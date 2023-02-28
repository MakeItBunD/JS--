// function unique(arr) {
//     return [...new Set(arr)]
// }

// Или
function unique(arr) {
    return Array.from(new Set(arr))
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
console.log( unique(values) ); // Hare,Krishna,:-O