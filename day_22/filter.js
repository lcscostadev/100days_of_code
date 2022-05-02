
function isLong(city) {
    return city.length > 8;
}

let cities = ['New york', 'Rio de janeiro', 'São paulo']


const longer = cities.filter(isLong);


console.log(longer);