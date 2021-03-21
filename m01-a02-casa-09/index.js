/* 
C = 1000
i = 0,125
t = 5

![M = 1000 (1 + 0,125)^5 \\ M = 1000 (1,802) \\ M = 1802](https://i.imgur.com/lai9CG0.png) */

let capital = 1000;
let taxaMensal = 0.125;
let tempoMes = 5;

let montante = (capital * Math.pow((1 + taxaMensal), tempoMes)).toFixed(2);

console.log(montante);