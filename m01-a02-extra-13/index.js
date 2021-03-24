let raio = 10;

// função que calcula o comprimento do círculo
let comprimento = value => {
  return 2 * Math.PI * value;
}

// função que calcula a área do círculo
let area = ao => {
  return Math.PI * Math.pow(raio, 2);
}

console.log(`Comprimento: ${comprimento(raio).toFixed(2)}`);
console.log(`Área: ${area(raio).toFixed(2)}`);