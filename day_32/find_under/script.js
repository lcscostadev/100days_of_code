let numbers = [73, 50, 512, 99, 59, 49]

function over50(num) {
    return num > 50;
}

console.log(numbers.find(over50));
