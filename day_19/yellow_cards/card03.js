// UTILILIZANDO O FOR EACH PARA OS ELEMENTOS DO ARRAY

let marcas = ['adidas', 'nike', 'apple'];

marcas.forEach(function (marca, index, array) {
    console.log(`a ${marca}, tem a posição ${index} e faz parte do array que é ${array}`);
})