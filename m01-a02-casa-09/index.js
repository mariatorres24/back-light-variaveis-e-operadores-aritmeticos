console.log("Bem-vindo a calculadora de juros compostos!");

const capital = 1000
const taxa = 12.5
const meses = 5

const taxaDec = taxa/100;

const montante = capital*(Math.pow((1 + taxaDec), meses));

console.log(`O seu montante investindo $${capital} durante ${meses} mes(es) com uma taxa de ${taxa}% é de $${montante.toFixed(0)}.`);