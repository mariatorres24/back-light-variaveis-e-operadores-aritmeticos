 // 129.99 = 100%
 // 80 = X%
 // 129.99X = 8_000
 // X = 8_000 / 129.99
 

let preço = 129.99;
let dinheiro = 80
const x = (dinheiro * 100) / preço;
const percentualFinal = x;
const desconto = 100 - percentualFinal;

console.log(desconto + "%");
