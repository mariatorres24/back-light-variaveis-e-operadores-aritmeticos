//Dados de entrada
let massa = 80; //[Kg]
let altura = 1.75; //[m]

//Calculo do IMC
let imc = massa / Math.pow(altura , 2);

//Impressão do IMC
console.log(`O IMC para uma pessoa de massa ${massa} kg e ${altura} m de altura é igual a ${imc}.`);
