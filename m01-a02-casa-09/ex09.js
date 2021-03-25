//![M = C(1 + i)^t]

//M: montante (o capital acrescido dos juros, ou seja, Capital + Juros)
//C: capital (valor inicial de uma dívida, empréstimo ou investimento)
//i: taxa fixa de juros (expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100)
//t: período de tempo

const C = 1.000; 
const t = 5; 
const i = 0.125; 

const M = C + i; 

const jurosCompostos = M = C(1 + i)^t

console.log (jurosCompostos); 



