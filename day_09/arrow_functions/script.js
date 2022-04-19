// diferentes tipos de função

// ---------------------------- // ---------------------------- //
//named function with 2 parameters
function sum(a, b) {
    return a + b;
}

//named function with 2 parameters to arrow function
let sum2 = (a, b) => a + b; //tudo depois da flecha é como se fosse return
// ---------------------------- // ---------------------------- //



// ---------------------------- // ---------------------------- //
//named function with 1 parameter
function isPositive(number) {
    return number >= 0;
}

//named function with 1 parameter to arrow function
let isPositive2 = number => number >= 0; // caso tenha apenas um parâmetro você pode remover os parênteses desse parâmetro
// ---------------------------- // ---------------------------- //


// ---------------------------- // ---------------------------- //
//named function with no parameters
function randomNumber() {
    return Math.random;
}

//named function with no parameters to arrow function
let randomNumber2 = () => Math.random;


// ---------------------------- // ---------------------------- //


// ---------------------------- // ---------------------------- //
//anonymous function
document.addEventListener('click', function () {
    console.log('click');
})

//anonymous function to arrow function
document.addEventListener('click', () => console.log('click'))


// ---------------------------- // ---------------------------- //