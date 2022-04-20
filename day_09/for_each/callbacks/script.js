const myFunc = callback => {
    const value = 77;

    callback(value); //invocando a função, como ela ta passando um argumento
}

myFunc(number => { //essa função é atribuida para o parâmetro callback, ja que no callback(value) ta passando um argumento, a gente tem que passar um parâmetro nessa declaração
    console.log(number);
})