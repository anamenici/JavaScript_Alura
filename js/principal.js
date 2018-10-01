var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
altura = tdAltura.textContent;

var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

var pesoEhValido = true;
var alturaEhValida = true;

if(peso >= 1000 || peso <=0){
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida!");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida){
    var imc = peso / ( altura * altura);    
    tdImc.textContent = imc;
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
}



