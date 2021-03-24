let numeroLados = 4;
let somaAngulos = (numeroLados - 2) * 180;
let valorAngulo = somaAngulos / numeroLados;

console.log(`Tendo um polígono de ${numeroLados} lados, a soma de seus ângulos internos é ${somaAngulos}. Caso seja um polígono regular (todos os ângulos internos iguais), cada ângulo interno seu vale ${valorAngulo} graus.`)