const capital = 1000, taxaFixa = 0.125, tempo = 5;
let resultado, montante, potencia ;
 
potencia = Math.pow(1 + taxaFixa, tempo);
montante = capital *  potencia;

console.log(montante);
/*
resultado = potencia;
for(let i = 1; i < tempo; i++){
    //potencia *= potencia;
    resultado *= potencia; 
}
console.log(resultado);
montante = capital * resultado;

console.log(montante);
*/