let valorProduto = 129, precoFinal = 80;

let desconto = valorProduto - precoFinal
desconto = 100 * desconto
desconto = Math.round(desconto / valorProduto)


console.log(`O desconto necessario para a compra do tenis e de ${desconto}%`);