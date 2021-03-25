/*
### Calcular a velocidade de uma pessoa

Suponha que você está trabalhando no desenvolvimento de um app para smart watch que calcula 
a velocidade média de uma pessoa que está usando o dispositivo numa corrida.

Calcule a velocidade média dessa pessoa a partir da distância percorrida pela pessoa 
e pelo tempo que passou, utilizando a fórmula abaixo.

![Velocidade = \frac{distPercorrida}{tempo}]
*/

let velocidade = 0;
let distPercorrida = 5000;
let tempo = 1500;

velocidade = ( distPercorrida / tempo ) * 3.6 //para transformar m/s em k/h multiplica-se o resultado da razão por 3.6

console.log(`\nA velocidade média foi de ${velocidade}km/h.\n`);