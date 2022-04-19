let valores = [1, 6, 8, 3, 9, 7];

valores.push(2);
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