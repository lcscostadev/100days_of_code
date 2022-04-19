let form = { nome: "Lucas", sobrenome: "Costa", data: 1999, peso: 65, sexo: 'M', salario: 1200, componentes: { placadevideo: "gtx 1660super", placamae: "asus tuf", memoriaram: "16gb", processador: "i5" } };

console.log(form.nome)
console.log(form.sobrenome)
console.log(form.peso + " kg")

form["idade"] = 22;
console.log(form["nome"]);
console.log(form["idade"]);

//constructor function

function Form(nome, sobrenome, peso) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.peso = peso;
}

// criando objeto

var myform = new Form("Fernando", "Pereira", "80");
console.log(myform.sobrenome);
myform.favcolor = "black";
console.log(myform.favcolor);