const valorTenis = 129.99;
const dinheiroNaMao = 80;
const desconto = Math.round (100 - ((dinheiroNaMao * 100) / valorTenis));

console.log(`Preciso de ${desconto}% de desconto para comprar o tênis`);