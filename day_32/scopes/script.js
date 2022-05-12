// scopes globais
let number = 30;
const name = 'Lucas';

// scopes de bloco
{
    let number = 20;
    const name = 'Thiago';

    // console.log(name);
    // console.log(number);
}

// scopes de função

function letWin() {
    const nameId = 'Lucas Costa da Silva';
    console.log(nameId);
}

letWin();