const T = 129.99; E = 80; // T é o preço do tenis e E é o valor das economias
const D = (100*E) / T; // Percentual das economias comparado com o valor do tenis
const P = 100 - D;  

console.log(`O percentia de desconto do cupom é de ${P}%`);
