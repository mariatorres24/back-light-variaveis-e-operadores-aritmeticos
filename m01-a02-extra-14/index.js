/*
### Soma dos ângulos internos de um polígono

Faça um programa que, a partir do número de lados de um polígono, imprima na tela a soma dos seus ângulos internos, 
conforme a fórmula abaixo:

![](https://4.bp.blogspot.com/-Vv69QfUHsrA/W5v7V35XwZI/AAAAAAABp5A/Zfy8oD9IOXgbVaw82BAw6PHfFh_CS3RmQCK4BGAYYCw/s1600/sn%2Bok.png)

Em seguida, calcule quanto vale cada um desses ângulos, caso eles sejam todos iguais, como no exemplo abaixo:

![](https://static.escolakids.uol.com.br/conteudo_legenda/460f67f820a78f732d55395e1932a031.jpg)
*/

let numeroDeLados = 6;
const somaDosAngulos = ( numeroDeLados - 2) * 180;
const angulo = somaDosAngulos / numeroDeLados;

console.log(`\nA soma dos angulos internos é ${somaDosAngulos}°.`);
console.log(`Cada angulo interno vale ${angulo}°.\n`);