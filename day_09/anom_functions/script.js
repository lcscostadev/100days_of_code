const sayHi = function () {
    console.log('Hello World');
}

setTimeout(sayHi, 1000);

setTimeout(function () {
    console.log('Hello World');
}, 3000);