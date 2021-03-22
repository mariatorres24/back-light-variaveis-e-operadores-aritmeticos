//calculando altos circulos 
//é meio inconveniente lembra do PI de cabeça
//então eu fui lá na documentação do javascript pegar a função que retorna PI
//no caso não é uma função, é um atributo do objeto Math, só chamr Math.PI que da bom

let comprimentoCirculo = (raio) => {

    return 2 * Math.PI * raio;

}

let areaCirculo = (raio) => {

    return Math.PI * (Math.pow(raio, 2));

}

raioDeUmCirculoMuitoMassa =  5.6

console.log(`comprimento => ${comprimentoCirculo(raioDeUmCirculoMuitoMassa)} :: área => ${areaCirculo(raioDeUmCirculoMuitoMassa)}`)