// Calculadora de juros compostos

let montante = 0, capital = 1000, juros = 12.5 / 100, periodo = 5;
montante = capital * Math.pow((1 + juros), 5);

console.log(montante.toFixed(2));
