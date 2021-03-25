let carteira = 80, custoProduto = 129.99, percentualTotal = 100, percentualDesconto = 0;
percentualDesconto = Math.round(percentualTotal - (carteira * percentualTotal /custoProduto));

console.log(percentualDesconto);