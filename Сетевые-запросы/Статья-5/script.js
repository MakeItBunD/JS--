// Accept: */*
// Accept-Charset: utf-8
// Accept-Encoding: gzip,deflate,sdch
// Connection: keep-alive
// Host: google.com
// Origin: http://javascript.info
// Referer: http://javascript.info/some/url

// Origin является обязательным заголовком в отличае от Referer
// Referer считается небезопасным, поэтому все запросы делаются от Origin
// Отсутствие Referer возможно, т.к. этот заголовок необязателен
// Отсутствие Origin невозможно (Обязательный заголовок)