const preco = 129.99, dinheiro = 80;

// A REGRA DE TRÊS FICA: 
//preço * D = 100(%) * dinheiro 
// D = (100*80)/129.99
let desconto = (100 * dinheiro)/preco; 

//achaamos quanto % o dinheiro equivale 
//nisso é só fazer a diferença de 100% 
desconto = 100 - desconto;
console.log(desconto);