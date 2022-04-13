function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'impossivel contar';
    } else {
        res.innerHTML = 'couting: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            alert('Passo inválido! Considerando passo = 1');
            p = 1;
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` ${c} \u{1F3C1}`;
    }
}

/*
1- criar função contar
2- chamar os elementos com variaveis ini, fim, passo, res
3- criar um if se o VALOR do ini QUANTIDADE DE LETRAS for igual a 0 || fim VALOR QUANTIDADE DE LETRAS for igual a 0, || passo VALOR QUANTIDADE DE LETRAS igual a 0
4- res com texto impossivel contar
5- e um alert com erro
6- else, res 'contando: <br>'
7- iniciar variaveis, i, f e p com o seu valor number
8- se o passo for menor ou igual a 0, passo invalido e passo vale 1;
9- se i for menor que f se cria um for
10- let c, c menor igual a f c += p
11- innerhtml com crase $ e {}  += \u{1F449
12- else for
mesma coisa que a de cima só que diminuindo
*/