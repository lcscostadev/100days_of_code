// escreva uma função que pegue um argumento um numero positivo, e retorne uma string alternando entre 1 e 0, e deve começar sempre com o numero 1, o comprimento da string deve combinar com o seu número.

// INPUT:
//     - um número inteiro positivo

// OUTPUT:
//     - uma string alternando de 1 a 0.

// RULES: 
//     - a string precisa começar com o número 1
//     - o comprimento da string tem que combinar com o seu número
//     - retorna uma string vazia se o número iniciar com 0 ou negativo

// DATA STRUCTURES:
//     - string -> 1s e 0s.

//ALGORITHM
//     - se o input for menor ou igual a 0 retorna uma string vazia
//     - criar uma variável result com string vazia
//     - loop for começando com o resultado 1
//       - se o número tiver um input impar
//           - o resultado retornara '1' para a string
//       - se não (se o número for par) retornara '0' para a string result.
//     -return result


function zeroAndOne(number) {
    if (number <= 0) return '';
    let result = '';

    for (let i = 1; i <= number; i += 1) {
        if (i % 2 === 1) {
            result += '1';
        } else {
            result += '0';
        }
    }
    return result;
}

console.log(zeroAndOne(0));
console.log(zeroAndOne(-2));

console.log(zeroAndOne(5));
console.log(zeroAndOne(8));
console.log(zeroAndOne(9));
console.log(zeroAndOne(7));

// a string que tiver output 1 é impar, e output 0 é par

function teste(number) {
    if (number <= 0) return '';
    let result = '';

    for (i = 1; i <= number; i += 1) {
        if (i % 2 === 1) {
            result += '1';
        } else {
            result += '0';
        }
    }
    return result;
}


function zerosAndOnes(number) {
    if (number <= 0) return '';
    let result = '';

    for (let i = 1; i <= number; i++) {
        if (i % 2 === 1) {
            result += '1';
        } else {
            result += '0';
        }
    }
    return result;
}

/*
creates a function with the parameretes of number if number <= 0 return empty string, because every single number starts with a odd number, number '1', so if its 0, cant work. now create a variable called result, that returns an empty string. now make a for loop, let i = 1; (odd number) if i <= number, i++, if the 1s and 0s didnt reach the console value, keep summing the i. now we do make a if to see if the number it is always a odd number, and if it is, return a 1 in his string, with the simple, i % 2 === 1 result += '1'; else, it returns a 0 because it is a even number, result += '0';

você precisa criar um programa que para um número impar, retorna 1 e para o número par retorna 0. primeiro faça um if vendo se o 1° número é 0, se for, retorna uma string vazia, crie uma variável resultado com uma string vazia, faça um loop, i começa valendo 1, se o i for menor que number, i++, ai você faz um if para saber sej o número é impar, com a expressão i % 2 === 1, else, retorna 0, depois retorne result, fora do loop.
*/