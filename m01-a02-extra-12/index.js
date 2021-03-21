let po = 1_000;
let x = 4;
let t = 100;
let p = po * Math.pow(x, t/7);
console.log(`Uma população inicial de ${po} infectados com taxa de transmissão de ${x} pessoas contaminadas por infectado resultará, após um período de ${t} dias, em um total de ${p} infectados.`)