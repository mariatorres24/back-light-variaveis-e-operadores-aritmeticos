let capital_inicial = 1000, taxa_juros = 1.125, parcelas = 5;
let composto = capital_inicial * Math.pow(taxa_juros, parcelas);
console.log(composto.toFixed(2));