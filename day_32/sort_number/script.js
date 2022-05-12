const numbers = [6, 9, 2, 100, 5, 300, 7, 4];

numbers.sort(function (x, y) {
    return x - y;
});

console.log(numbers);