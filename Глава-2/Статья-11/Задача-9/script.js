const userName = prompt('Логин', '')

if (userName === 'Админ') {
    const userPassword = prompt('Пароль', '')

    if (userPassword === 'Я главный') {
        alert('Здравствуйте!')
    }
    else if (userPassword === null || userPassword === '') {
        alert('Отменено')
    }
    else {
        alert('Неверный пароль')
    }
}
else if (userName === null || userName === '') {
    alert('Отменено')
}
else {
    alert('Я вас не знаю')
}