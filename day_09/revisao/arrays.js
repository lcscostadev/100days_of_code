let valores = [1, 6, 8, 3, 9, 7];

valores.push(2);
valores.shift() // deleta o primeiro item do array
valores.pop() // deleta o ultimo item do array 
valores.unshift() //adiciona um item no inicio do array
// valores.sort();

var num = valores.indexOf(7);

if (num === -1) {
    console.log("desculpe, valor não encontrado");
} else {
    console.log(`o valor se encontra na posição ${num}`);
}

// for (let i = 0; i < valores.length; i++) {
//     console.log(valores[i]);
// }

// for (let pos in valores) {
//     console.log(valores[pos]);
// }