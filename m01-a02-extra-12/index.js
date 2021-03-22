//programa para calcular o corona 

let simulation = (pInitial, tFactor, time) => {

    return pInitial * (Math.pow(tFactor, (time/7)));

}

console.log(`o número de pessoas infectadas nessa simulação é: ${simulation(1000,4,100)}`);
//espero que esteja certo
//não tenho muito parâmetro pra comparar