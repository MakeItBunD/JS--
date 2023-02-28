function checkSpam(str) {
    return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx') ? true : false
}

console.log( checkSpam('buy ViAgRA now') )
console.log( checkSpam('free xxx') )
console.log( checkSpam("innocent rabbit") )