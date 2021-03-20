let P0 = 1000, x = 4, t = 100, P = 0;        // P0 = número de pessoas infectadas no dia 0 - x = taxa de transmissão  - t = número de dias decorridos e P = número de pessoas infectadas no dia especifico.

x = Math.pow(x, t/7);
P = P0 * x;
console.log(`O número de pessoas infectadas depois de ${t} dias será de ${P}`);