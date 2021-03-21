// const a = 9, b = 8, c = -1;

// // Cálculo do delta:

// const delta = (Math.pow(b, 2) - 4 * a * c);

// console.log(`Para a = ${a}, b = ${b} e c = ${c}, temos um delta de ${delta}.`);

// // Cálculo de x1 e x2:

// const x1 = ((-b + Math.sqrt(delta)) / (2 * a));

// const x2 = ((-b - Math.sqrt(delta)) / (2 * a));

// console.log(`x1 = ${x1} e x2 = ${x2}.`);

// Utilizando o function:

const a = 9, b = 8, c = -1;

// Cálculo do delta:

function delta() {
    delta = (Math.pow(b, 2) - 4 * a * c);
}
delta();

console.log(`Para a = ${a}, b = ${b} e c = ${c}, temos um delta de ${delta}.`);

// Cálculo de x1 e x2:

function x1() {
    x1 = ((-b + Math.sqrt(delta)) / (2 * a));
}
x1();

function x2() {
    x2 = ((-b - Math.sqrt(delta)) / (2 * a));
}
x2();

console.log(`x1 = ${x1} e x2 = ${x2}.`);