let numbers = [5, 7, 2, 6, 4, 1, 8];

numbers.push(3);
numbers.sort();


for (let pos in numbers) {
    console.log(numbers[pos]);
}

let position = numbers.indexOf(4);

if (position === -1) {
    console.log('numero não encontrado');
} else {
    console.log(position);
}