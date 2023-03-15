// В чём отличие между getComputedStyle(elem).width и elem.clientWidth

// 1. Если ширина не задана, то getComputedStyle(elem).width вернет auto
// elem.clientWidth вернет ширину контента в пикселях

// 2. clientWidth возвращает число, 
// а getComputedStyle(elem).width – строку с px на конце

// 3. clientWidth включает padding, 
// а getComputedStyle(elem).width без box-sizing: border-box не включает padding