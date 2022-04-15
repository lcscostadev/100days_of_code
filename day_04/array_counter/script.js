let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = []; //sempre crie o array globalmente, não dentro de uma função.

function isNumero(n) { //se o numero for maior ou igual a 1 AND o numero for menor ou igual a 100 ele é verdadeiro
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }


} //verificar se é um numero

function inLista(n, l) { //recebe um número e uma lista
    if (l.indexOf(Number(n)) != -1) {  //se o indexOf da lista for um número AND ele não ser igual a -1 (-1 signfica que ele não está na lista)
        return true;
    } else {
        return false;
    }
} // verificar se esse número ta na lista

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // se for um número e NÃO tiver no array valores AND não for o número digitado anteriormente
        valores.push(Number(num.value)); // o valor digitado será adicionado no final da lista.
        let item = document.createElement('option'); //criando um elemento option quando o valor é gerado
        item.text = `Valor ${num.value} adicionado`; // aparecerá essa string quando o valor for adicionado
        lista.appendChild(item); // adicionando um item filho em lista
        res.innerHTML = '' // quando eu adicionar um novo elemento ele tem que limpar o resultado de res
    } else {
        alert('valor inválido ou já encontrado');
    }
    num.value = ''; //valor em branco
    num.focus() // como se você clicasse no input number para digitar outro valor
} // rodar o botão de adicionar número

function finalizar() {
    if (valores.length == 0) { // verificando se o usuário não digitou nada
        alert('adicione valores antes de finalizar');
    } else {
        let tot = valores.length // total que tem no array
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) { //se o valor da lista for maior que o maior número atual, logo ele se torna o maior
            }
            if (valores[pos] < menor)
                menor = valores[pos]; // se o valor da lista for menor que o menor número atual, logo ele se torna o maior
        }
        media = soma / tot; // média básica entre a soma e o total 

        res.innerHTML = ''; //zerar o valor
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`//concatenado
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`
    }
} // rodar os numeros do array 

/* 
1- fazer a função isNumero que é: checar se é um número positivo e checar se ele é menor que 100
2- fazer a função inLista que é: checar se esse número ja esta dentro da lista, se tiver não podera ser adicionado
3- fazer a função adicionar que é: a lógica de que se é um número e ele não adicionado na lista então ele é adicionado.
*/