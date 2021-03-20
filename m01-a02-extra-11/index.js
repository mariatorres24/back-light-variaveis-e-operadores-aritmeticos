let velocidade = 0, distPercorrida = 45, tempo = 30, fatorDeConversão = 3.6;  //Distância em metros e Tempo em segundos

velocidade = distPercorrida / tempo;
velocidade = velocidade * fatorDeConversão;
console.log(`A velocidade de deslocamento é de ${velocidade} Km/h`);