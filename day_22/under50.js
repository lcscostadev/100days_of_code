const numbers = [51, 54, 57, 222, 333, 5444, 49, 53, 55, 66, 77, 88]

function under50(num) {
    return num < 50;
}

console.log(numbers.find(under50));