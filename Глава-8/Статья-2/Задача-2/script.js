// Так работает:
// function User(name) {
//     this.name = name
// }
  
// let user = new User('John')
// let user2 = new user.constructor('Pete')

// console.log( user2.name )

// Так не будет работать:
function User(name) {
    this.name = name
}

User.prototype = {}
  
let user = new User('John')
let user2 = new user.constructor('Pete')

console.log( user2.name )