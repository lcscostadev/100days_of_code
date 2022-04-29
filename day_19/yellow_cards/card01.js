// UTILIZANDO O SORT PARA NÚMEROS

let numbers = [1, 2, 5, 3, 7, 8, 22, 11, 100];

numbers.sort(function (x, y) {
    return y - x;
})

console.log(numbers);

