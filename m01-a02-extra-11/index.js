// Cálculo da velocidade média:

// let distPerc = 10, tempo = 10;

// let velMedia = ((distPerc / tempo) * 3.6).toFixed(1);

// console.log(`Para uma distância percorrida de ${distPerc} metro(s) num tempo de ${tempo} segundo(s) sua velocidade média foi de ${velMedia} km/h.`);

// Utilizando o function:

let distPerc = 10, tempo = 10;

function velMedia() {
    velMedia = ((distPerc / tempo) * 3.6).toFixed(1);
};
velMedia();

console.log(`Para uma distância percorrida de ${distPerc} metro(s) num tempo de ${tempo} segundo(s) sua velocidade média foi de ${velMedia} km/h.`);