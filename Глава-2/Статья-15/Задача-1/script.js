function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
}

// Результат будет одинаковым, else можно опустить

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
}