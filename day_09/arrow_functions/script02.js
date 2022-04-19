class Person {
    constructor(name) {
        this.name = name;
    }
}

printNameArrow(); {
    setTimeout(() => {
        console.log('Arrow: ' + this.name);
    }, 100)
}

printNameFunction(); {
    setTimeout(function () {
        console.log('Function: ' + this.name);
    }, 100);
}

let person = new Person('bob');
person.printNameArrow()
person.printNameFunction();

// Tip: 99% of the time you can use const over let in JavaScript. Functions can always be assigned to a const since the function code does not change.
