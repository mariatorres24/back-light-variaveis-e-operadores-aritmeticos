let a = 9;
let b = 8;
let c = -1;

// Cálculo do delta:

let delta = (Math.pow(b, 2) - 4 * a * c);

console.log(`Para a = ${a}, b = ${b} e c = ${c}, temos um delta de ${delta}.`);

// Cálculo de x1 e x2:

let x1 = ((-b + Math.sqrt(delta)) / (2 * a));

let x2 = ((-b - Math.sqrt(delta)) / (2 * a));

console.log(`x1 = ${x1} e x2 = ${x2}.`)