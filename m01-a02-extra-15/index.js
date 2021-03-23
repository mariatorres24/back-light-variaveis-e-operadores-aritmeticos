const a = 4
const b = 2
const c = - 6
const delta = (Math.pow(b, 2)) - 4 * a * c;
const x1 = (- b + (Math.sqrt(delta))) / (2 * a);
const x2 = (- b - (Math.sqrt(delta))) / (2 * a);
const formulaDeBhaskara = (x1 + "; " + x2);

console.log(`Nessa equação, foi gerado um valor de delta igual a ${delta} e o resultado obtido com o uso da fórmula de Bhaskara foi: (${formulaDeBhaskara}).`);