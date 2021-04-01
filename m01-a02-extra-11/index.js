let distPercorrida = 1000, tempo = 3660, velocidade = 0;

velocidade = ((distPercorrida / tempo) * 3.6).toFixed(2);
console.log(`A velocidade média da corrida foi de ${velocidade} km/h`);