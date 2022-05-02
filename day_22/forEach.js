let cars = ['Ford', 'Tesla', 'Fiat']

cars.forEach(function (car, index, array) {
    console.log(`the car is ${car}, he's position is ${index}, the garage has the follow cars: ${array}`);
})