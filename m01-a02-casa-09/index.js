let tempo = 5
let juros = 0.125
let capital = 1_000
const montante = capital * Math.pow((1 + juros), tempo);

console.log(montante);
