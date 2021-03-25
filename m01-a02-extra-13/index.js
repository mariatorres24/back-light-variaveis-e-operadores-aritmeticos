/*
### Calculo do perímetro e área de um círculo

Faça um programa que, a partir do raio de um círculo, calcula o comprimento (C) e a área (Ao) deste círculo.

![](https://www.estudopratico.com.br/wp-content/uploads/2014/11/area-de-uma-circunferencia.png)

OBS: Nós sabemos que não falamos sobre o número PI nas aulas. O objetivo aqui é que vocês aprendam a 
pesquisar esse ponto específico também. Boa sorte, qualquer coisa é só pedir socorro pra gente! =)
*/

let raio = 5;
const comprimento = 2 * Math.PI * raio;
const area = Math.PI * Math.pow(raio, 2);

console.log(`\nA área do circulo é ${area.toFixed(2)}m².`);
console.log(`O comprimento do circulo é ${comprimento.toFixed(2)}m.\n`);