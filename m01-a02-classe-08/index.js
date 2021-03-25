const valorDoTenis = 129.99;
const dinheiroParaComprar = 80;
const diferençaDinheiro = valorDoTenis - dinheiroParaComprar;
const desconto = (diferençaDinheiro*100) / valorDoTenis

console.log(`O desconto necessário será de ${desconto.toFixed()}%  `)