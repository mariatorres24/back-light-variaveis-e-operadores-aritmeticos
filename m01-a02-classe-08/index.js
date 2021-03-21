let productPrice = 129.99;
let customerMoney = 80;
let discount = 0.0;


discount = 100 - ((customerMoney / productPrice) * 100);
console.log(Math.round(discount) +"%");