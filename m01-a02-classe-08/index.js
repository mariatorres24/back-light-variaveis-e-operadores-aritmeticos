let preco = 129.99 

const dinheiroDisponivel = 80

let desconto = (100 * dinheiroDisponivel)/preco;

desconto = "O desconto será de " + (100 - desconto) .toFixed(2) + "%";

console.log(desconto);