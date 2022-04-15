let valores = [1, 2, 5, 3, 4, 6];

valores.sort();
valores.push(7)

console.log(valores);

num = valores.indexOf(10);
if (num === -1) {
    console.log(`o número não está nessa lista`)
} else {
    console.log(`o número está localizado na posição ${num}`);
}

for (let pos in valores) {
    console.log(`A posição ${pos} é igual o valor de ${valores[pos]}`);
}