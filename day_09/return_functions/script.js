var number = 5;
var anotherNumber = 5;

function add(n1, n2) {
    return n1 + n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

var sum = add(number, anotherNumber);
var product = multiply(prompt("Enter a number"), sum);
console.log(product);

// quando a gente chama uma função a gente tem que criar uma variavel para segurar essa resposta

// o retorno é para você ter aquele resultado for da função para usar para alguma coisa