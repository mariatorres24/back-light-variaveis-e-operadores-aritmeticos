let a = 0, b = 0, x1 = 1, x2 = 1, y1 = 1, y2 = 4, d = 0;

a = x2 - x1;
a = Math.pow(a, 2);
b = y2 - y1;
b = Math.pow(b, 2);
d = a + b ;
d = Math.sqrt(d);
console.log(`A distância é de ${d}`);
