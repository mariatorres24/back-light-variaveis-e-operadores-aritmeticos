let peso = prompt("Insira o seu peso");
let altura = prompt("Insira a sua altura em metros");
let imc = peso/(altura**2);

console.log(`O seu IMC é ${imc.toFixed(2)}`);