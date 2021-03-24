let valorTenis = 12999; //Em centavos
let dinheiroNaMao = 8000; //Em centavos
let desconto = Math.round (100 - ((dinheiroNaMao * 100) / valorTenis));

console.log(`Preciso de ${desconto}% de desconto para comprar o tênis`);