let productPrice = 800;
let customerMoney = 664;
let discount = 0.0;


discount = 100 - ((customerMoney / productPrice) * 100);
console.log(Math.round(discount) +"%");