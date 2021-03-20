const a = 129; //valor tenis
const b = 100; //100% (sem desconto)
const c = 80; //valor a ser gasto
const d = (100 - (b * c)/a); //x% (desconto necessário)
console.log(`O desconto necessário será de ${d.toFixed(2)}%`);


