const numbers = [1, 2, 5, 6, 23, 22, 677, 34, 12];

numbers.sort((x, y) => {
    return x - y;
});

console.log(numbers);