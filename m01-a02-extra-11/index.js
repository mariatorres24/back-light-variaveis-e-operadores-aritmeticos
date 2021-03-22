//calculando o relampago marquinhos 

let msTokm = (metros, segundos) => {

    return [(metros/1000), (segundos/3600)];

}//quis fazer uma função mais geral  

let velocidade = (distancia, tempo) => {

    return distancia / tempo;

}//formula humilde de velocidade

km = msTokm(10, 5); //metros/segundo => kilometros/hora
console.log(km[0], km[1]); //velocidade