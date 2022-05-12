let numbers = [1, 101, 4, 2, 6, 7, 8, 9];

// let isIt = numbers.indexOf(3);

// if (isIt === -1) {
//     console.log('this number is not on the array');
// } else {
//     console.log(`the position of this array is ${isIt}`);
// }


// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let i in numbers) {
//     console.log(numbers[i]);
// }

// let i = 0;

// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }

// do {
//     console.log(numbers[i]);
//     i++;
// } while (i < numbers.length);

numbers.sort(function (x, y) {
    return y - x;
});

numbers.forEach(function (num, index) {
    console.log(`this is the number ${num}, and the current position on the array is ${index}`);
})