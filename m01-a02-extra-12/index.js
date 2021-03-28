//Casos de COVID

//Data Input

const populacaoInicial = 1000;
const fatorTransmissao = 4; //X
const tempoDias = 100;

//Formula da População Infectada após um tempo T
const populacaoNoTempoT = (populacaoInicial * Math.pow(fatorTransmissao , tempoDias / 7)).toFixed(0)

//Output message
console.log(`Estima-se que população infectadas após decorrido o tempo de ${tempoDias} dias será de ${populacaoNoTempoT} pessoas.`);