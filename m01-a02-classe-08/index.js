/*
### Desconto do tênis

Você deseja comprar um tênis novo, porém, está com o dinheiro do mês contado e te sobrará somente R$ 80,00 para comprá-lo.

O tênis custa R$ 129,99 porém um amigo seu trabalha na loja e consegue te dar um cupom de desconto, 
a única coisa que ele precisa é saber quanto por cento de desconto você necessita.

Crie um programa para calcular a porcentagem necessária de desconto para você conseguir comprar o tênis, utilizando a regra de três.
*/

let precoDoTenis = 129.99;
let percDesconto = 0;
const dinheiro = 80;

percDesconto = (1 - (dinheiro / precoDoTenis)) * 100;

console.log(`É necessário um desconto de ${percDesconto.toFixed(1)}% para comprar o tenis por R$${dinheiro.toFixed(2)}.`);