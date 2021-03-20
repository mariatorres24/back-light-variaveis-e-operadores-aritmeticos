let precoTenis = 129;
let dinhMes = 80;

let cupomDesc = precoTenis - dinhMes
cupomDesc += cupomDesc * 100
cupomDesc = Math.round(cupomDesc / precoTenis)


console.log(`A Porcentagem necessária de desconto para  conseguir comprar o tênis e de ${cupomDesc} %`); 