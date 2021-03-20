let montante;
const capital    = 1000;
const juros_fixo = 0.125;
const tempo      = 5;

montante = capital * Math.pow((1 + juros_fixo), tempo);
console.log(montante);