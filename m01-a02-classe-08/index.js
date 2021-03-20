let valorDisponivel = 80;
let precoTenis = 129.99;
let desconto = (precoTenis - valorDisponivel) / precoTenis * 100;
console.log(`Com valor disponível de R$${valorDisponivel.toFixed(2)} para compra de um tênis com preço de R$${precoTenis.toFixed(2)} preciso de um desconto de ${desconto.toFixed(1)}%.`);