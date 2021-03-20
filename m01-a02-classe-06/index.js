/* IMC (Índice de Massa Corporal) é um cálculo que ajuda a avaliar se a pessoa está dentro do seu peso ideal, de acordo com a altura */

const massaCorporal = 73;
const alt = 1.66;

const imc = massaCorporal / (alt * alt);
console.log(`O Resultado do IMC é ${imc}`);