//Calcular a velocidade de uma pessoa

//Input data
const distanciaPercorridaMetros = 1000; //[m]
const tempoSegundos = 150; //[s]


//Distance Equation
const velocidadeKmH = ((distanciaPercorridaMetros / tempoSegundos)*3.6).toFixed(2)

//Output Message
console.log(`A velocidade média é ${velocidadeKmH}km/h.`);