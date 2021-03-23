const valorDoTenis = 12999
const valorDeCompra = 8000
const percentualPago = (100*valorDeCompra/valorDoTenis).toFixed(2)
const percentualDeDesconto = 100 - percentualPago


console.log (`O percentual de desconto necessário para comprar o tênis é de ${percentualDeDesconto}%.`)
