// Como metódo de entrada usei o antiquado 'prompt'
// Assim o código opera somente rodando no console dos navegadores e não no node.

console.log("Bem-vindo a calculadora de juros compostos!");

const capital = prompt("Insira o valor do seu capital:");
const taxa = prompt("Insira o valor da porcentagem da taxa mensal fixa:")
const meses = prompt("Insira o valor referente a quantidade de meses que quer investir");

const taxaDec = taxa/100;

const montante = capital*((1 + taxaDec)**meses);

console.log(`O seu montante investindo $${capital} durante ${meses} mes(es) com uma taxa de ${taxa}% é de $${montante.toFixed(0)}.`);