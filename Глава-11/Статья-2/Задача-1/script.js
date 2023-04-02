let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log); // 1 может быть только 1 resolve или reject