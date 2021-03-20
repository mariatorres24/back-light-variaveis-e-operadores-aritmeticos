// const pesoEmKg = 85, alturaEmMetros = 1.77;
// const quadradoAltura = Math.pow(alturaEmMetros, 2);
// const imc = pesoEmKg / quadradoAltura;

// console.log(`Meu peso é ${pesoEmKg}kg`);
// console.log(`Minha altura é ${alturaEmMetros}m`);
// console.log(`Então meu IMC é ${imc}`);


const pesoEmKg = 85, alturaEmMetros = 1.77;
const imc = pesoEmKg / (Math.pow(alturaEmMetros, 2));

console.log(`Meu peso é ${pesoEmKg}kg`);
console.log(`Minha altura é ${alturaEmMetros}m`);
console.log(`Então meu IMC é ${imc}`);
