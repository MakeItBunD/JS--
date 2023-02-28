function formatDate(date) {
    let diff = new Date() - date;

    switch (true) {
        case diff < 1000:
            return 'Прямо сейчас';

        case diff < 1000 * 60:
            return `${diff / 1000} сек. назад`;

        case diff < 1000 * 60 * 60:
            return `${diff / 1000 / 60} мин. назад`;

        default:
            let dateAgo = new Date(new Date() - diff);
            return `${dateAgo.getDate()}.${dateAgo.getMonth() + 1}.${dateAgo.getFullYear()} ${dateAgo.getHours()}:${dateAgo.getMinutes()}`;
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log( formatDate(new Date(new Date - 86400 * 1000)) );
