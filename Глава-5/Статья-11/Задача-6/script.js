// Проблемы с точностью:
// function getSecondsToday() {
//     let date = new Date()

//     return (date.getTime() - date.setHours(0)) / 1000
// }

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.round((now - today) / 1000); 
}

console.log(getSecondsToday())