function imparPar(n) {
    if (n % 2 === 0) {
        return 'par';
    } else {
        return 'impar';
    }
}

let res = imparPar(1848668482);
console.log(res);

function somaUm(n1, n2) {
    return n1 + n2;
}

console.log(somaUm(2, 5));

function fatorialNumber(n) {
    let fat = 1;
    for (let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat;
}

console.log(fatorialNumber(5));