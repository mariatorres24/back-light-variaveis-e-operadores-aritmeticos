// Lados de um polígono:

let lados = 6;

// Soma dos ângulos internos do polígono:

let soma = (lados - 2) * 180;

// Valor de cada ângulo interno do polígono:

let angulo = soma / lados;

console.log(`Para um polígono com ${lados} lados, temos a soma dos ângulos internos igual a ${soma}º e o valor dos ângulos internos de ${angulo}º.`);