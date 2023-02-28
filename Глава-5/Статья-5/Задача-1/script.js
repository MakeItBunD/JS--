// function camelize(str) {
//     str = str.split('-');
//     result = str[0];

//     for (let i = 1; i < str.length; i++) {
//         result += str[i][0].toUpperCase() + str[i].slice(1);
//     }

//     console.log(result);

//     return result;
// }

function camelize(str) {
    return str
        .split('-') 
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join(''); 
}

console.log( camelize("background-color") == 'backgroundColor' );
console.log( camelize("list-style-image") == 'listStyleImage' );
console.log( camelize("-webkit-transition") == 'WebkitTransition' ); 