let numbers = [9, 2, 55, 11, 100, 13, 15];

numbers.sort(function (x, y) {
    return x - y;
});

console.log(numbers);

// decrescent

numbers.sort(function (x, y) {
    return y - x;
});

console.log(numbers);
