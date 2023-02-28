// Исходный код:
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
}

// Решение:
function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

// Или:
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}
