const month = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

const random = Math.floor(Math.random() * month.length);

console.log(`Hoje é ${month[random]} esqueceu?`);