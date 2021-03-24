//Tennis Discount

//Input Data
let initialPrice = 129.99;
let desiredPrice = 80;

//Discount Formula
let discountFactor = 100*(1- desiredPrice / initialPrice); //[%]

//Print Discount Factor
console.log(`The discount factor that makes the tennis affordable is ${discountFactor}%.`);

