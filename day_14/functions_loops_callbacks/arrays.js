let valores = [0, 4, 8, 1, 2, 3, 9];


valores.sort();
valores.push(5);
valores.pop();
valores.shift();
valores.unshift(0.5);

// console.log(valores.indexOf(7));

let valor = valores.indexOf(9);

if (valor === -1) {
    console.log('desculpe amigo, esse valor não se encontra nessa lista')
} else {
    console.log(` o valor se encontra na posição ${valor}`);
}

