let peso = 92;

let altura = 1.98;

let IMC = (peso / Math.pow(altura, 2)).toFixed(2);

console.log(`Seu IMC pesando ${peso} e tendo ${altura} é de ${IMC}`);