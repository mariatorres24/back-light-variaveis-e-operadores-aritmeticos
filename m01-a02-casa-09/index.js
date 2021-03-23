// M = C(1 + i) ^ t

const nomeProduto = "iPhone 12 Pro Max"
const valorAVista = 848300
const taxaDeJuros = 0.0099
const numeroDeParcelas = 12
const valorComJuros = (valorAVista * Math.pow((1 + taxaDeJuros), numeroDeParcelas)/100).toFixed(2);
let valorDasParcelas = (valorComJuros / numeroDeParcelas).toFixed(2);

console.log (`O valor total com juros a ser pago pelo ${nomeProduto}, será de ${valorComJuros} reais, sendo dividido em ${numeroDeParcelas} parcelas de ${valorDasParcelas} reais.`);
