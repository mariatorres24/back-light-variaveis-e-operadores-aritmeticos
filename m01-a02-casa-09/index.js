// Compound Interest

//Data Input 
 //Montante (o capital acrescido dos juros, ou seja, Capital + Juros)
let C = 1000; //Initial capital
let i = 0.125; //Tax
let t = 5; //Time Period

//Compoud Interest Formula
let M = C * Math.pow (1+i, t);// Final amount

//Print the Final Amount
console.log(`The final amount is ${M} considering an initial capital of ${C} applaied for ${t} months using compound interest wtih a tax of ${i}.`);
