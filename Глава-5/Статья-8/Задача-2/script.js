let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let weakMap = new WeakMap();

weakMap.set(messages[0], new Date());
weakMap.set(messages[1], new Date());
weakMap.set(messages[2], new Date());