/*
### Casos de COVID

Suponha que você está trabalhando no Ministério da Saúde e está trabalhando 
num simulador de casos de COVID-19. Seu trabalho é fazer um programa que calcula qual será o total de 
pessoas infectadas a partir de 3 variáveis.

Po = a população incial de pessoas infectadas
X = quantidade de pessoas para as quais um paciente infectado pode transmitir
t = tempo percorrido

Ou seja, se:

Po = 1000
x = 4
t = 100

O seu sistema ira calcular quantas pessoas estarão infectadas após 100 dias, 
dado que inicialmente havia 1000 pessoas infectadas, cada uma delas transmitindo para outras 4 pessoas.

Para isso, a fórmula é a seguinte:

![P = Po * x ^\frac{t}{7}]
*/

let populacaoInfectada = 1000;
let capacidadeDeTransmissao = 4;
let tempo = 100;
let pessoasPossivelmenteInfectadas = 0;

pessoasPossivelmenteInfectadas = populacaoInfectada * Math.pow(capacidadeDeTransmissao,(tempo/7));

console.log(`\nPoderá haver ${Math.round(pessoasPossivelmenteInfectadas).toLocaleString()} pessoas infectadas após ${tempo} dias.\n`); 

//Math.round(x) arredonda para o valor inteiro mais próximo
//.toLocaleString() transforma o numero numa string e coloca os pontos separadores de unidades (unidade, centena, milhar, etc)