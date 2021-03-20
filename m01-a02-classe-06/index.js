var peso = ""
var altura = ""
var nome = ""

function calculaImc(peso, altura){
    nome = document.getElementById("nome").value;
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    

    var imc = peso / (altura * altura);
    var resposta = ""

    if(imc <= 16 && imc < 17){
        resposta = (`Você está MUITO abaixo do peso, ${nome}. Seu IMC é de ${parseInt(imc)}`);
    } else if(imc >= 17 && imc < 18){
        resposta = (`Você está um pouco abaixo do peso, ${nome}. Seu IMC é de ${parseInt(imc)}`);
    } else if(imc >= 18 && imc < 25){
        resposta = (`Você está no peso ideal, ${nome}. Seu IMC é de ${parseInt(imc)}`);
    } else if(imc >= 25 && imc <= 30){
        resposta = (`Você está acima do peso, ${nome}. Seu IMC é de ${parseInt(imc)}`);
    } else {
        resposta = (`Você está MUITO acima do peso, ${nome}. Seu IMC é de ${parseInt(imc)}`);
    }
    

    document.getElementById("output").innerHTML = resposta;
}