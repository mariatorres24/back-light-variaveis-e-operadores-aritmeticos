//multiplicar o valor do produto pela porcentagem dada. 
//subtrair esse valor do preço inicial do tênis, para saber valor total com o desconto.

const valorTenis = 129.99;
const possoGastar = 80;

const descontoAmigo = (possoGastar / valorTenis) * 100;

console.log(descontoAmigo.toFixed(2) + " " + "de desconto.");