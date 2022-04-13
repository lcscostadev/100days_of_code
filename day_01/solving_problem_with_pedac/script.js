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