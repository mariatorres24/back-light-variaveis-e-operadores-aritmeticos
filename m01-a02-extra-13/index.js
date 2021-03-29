//Cálculo do perímetro e área de um círculo

//Data input
const raioCirculo = 2 ; //[u.c]

//Formulas
const perimetroCirculo = (2*Math.PI*raioCirculo).toFixed(2) ; //[u.c]
const areaCirculo = (Math.PI*Math.pow(raioCirculo,2)).toFixed(2) ; // [u.a]

console.log(`Um círculo de raio ${raioCirculo} possui perímetro de ${perimetroCirculo} u.c e área de ${areaCirculo}u.a.`);