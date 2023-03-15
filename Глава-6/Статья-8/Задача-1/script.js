// function printNumbers(from, to) {
//     let int = setInterval(() => {
//         if (from === to) {
//             clearInterval(int)
//         }

//         console.log(from++)
//     }, 1000)
// }

function printNumbers(from, to) {
    let tim = setTimeout(function run() {
        if (from === to) {
            clearTimeout(tim)
        } else {
            setTimeout(run, 1000)
        }

        console.log(from++)
    }, 1000)
}

printNumbers(1, 5)