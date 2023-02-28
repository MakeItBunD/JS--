'use strict'

let str = "Привет";

str.test = 5; // Ошибка c 'use strict'

alert(str.test); // undefined без 'use strict'