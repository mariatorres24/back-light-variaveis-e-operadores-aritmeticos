let distanciaEmMetros = 1000;
let tempoEmSegundos = 250;

let velocidadeMediaEmKmH = ((distanciaEmMetros / tempoEmSegundos) * 3.6).toFixed(2);

console.log(`Percorrendo ${distanciaEmMetros} metros em ${tempoEmSegundos} segundos, sua velocidade média será de ${velocidadeMediaEmKmH}Km/h`);