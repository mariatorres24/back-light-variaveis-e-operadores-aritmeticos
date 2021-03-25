let valorTotal = 129.99;
let valorDisponivel = 80;

let regra = 100 * valorDisponivel / valorTotal;

let cupomDesconto = (100 - regra).toFixed(2);

console.log (`Preciso de um cupom de desconto de ${cupomDesconto}%`);

