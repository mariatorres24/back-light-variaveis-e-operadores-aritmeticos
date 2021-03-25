/*
### Delta

Na Famigerada fórmula de báskhara, que serve para calcular as raízes de uma equação de segundo grau, 
o primeiro passo é calcular o valor de delta, a partir dos coeficientes A, B e C, conforme a fórmula abaixo.

![Fórmula do delta](http://2.bp.blogspot.com/-v--lekxUbt0/VXr_4sJPvCI/AAAAAAAAQrU/43sKNsaLX58/s320/delta.jpg)

Faça um programa que calcula o valor de delta a partir desses coeficientes.
*/

let a = 3;
let b = 5;
let c = 1;
const delta = Math.pow(b, 2) - 4 * a * c;

console.log(`\nO valor de ▲ é ${delta}.\n`); // ▲ -> Alt + 30