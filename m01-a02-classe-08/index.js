let valorTenis = 129.99, percentualDeDesconto = 0, valorASerDescontado = 0, valorPossuído = 80;

valorASerDescontado = valorTenis - valorPossuído;
percentualDeDesconto = (valorASerDescontado * 100) / valorTenis;
console.log(`O percentual de desconto necessário para a compra do tênis é ${percentualDeDesconto}%`);