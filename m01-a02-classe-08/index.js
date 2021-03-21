// Calculo do desconto:

// let valorEmMaos = 80;
// let valorTenis = 129.99;

// let desconto = 100 - (valorEmMaos * 100 / valorTenis);

// console.log(`Para comprar um tênis no valor de R$${valorTenis.toFixed(2)} com R$${valorEmMaos.toFixed(2)} em mãos, vai precisar de um desconto de ${desconto.toFixed(1)}%.`);


// Utilizando o function:

let valorEmMaos = 80;
let valorTenis = 129.99;
function desconto() {
    desconto = 100 - (valorEmMaos * 100 / valorTenis)
};
desconto()

console.log(`Para comprar um tênis no valor de R$${valorTenis.toFixed(2)} com R$${valorEmMaos.toFixed(2)} em mãos, vai precisar de um desconto de ${desconto.toFixed(1)}%.`);