function f() {
    alert( this ); // null только при использовании 'use strict'
                   // без знего будет window в браузере и
                   // global в node.js
};
  
let user = {
    g: f.bind(null)
};
  
user.g();