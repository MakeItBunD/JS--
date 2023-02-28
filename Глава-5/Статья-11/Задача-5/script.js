// function getLastDayOfMonth(year, month) {
//     let lastDate = 0;
//     let date = new Date(year, month);

//     while (date.getMonth() === month) {
//         date.setDate(date.getDate() + 1);
//         lastDate++
//     }

//     return lastDate
// }

// Или же более красивое решение из источника:
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1))