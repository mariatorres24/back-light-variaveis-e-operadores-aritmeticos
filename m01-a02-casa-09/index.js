let C = 1000, i = 0.125, t = 5, M = 0;

//M = (C * (Math.pow((1 + i), t))).toFixed(2);

M = C * (Math.pow((1 + i), t))

M = M.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'});

console.log (M);