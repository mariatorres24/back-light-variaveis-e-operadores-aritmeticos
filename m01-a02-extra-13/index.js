function perimetroEarea(r) {
    const pi = 3.14159265359;
    let perimetroDoCirculo = 2 * pi * r;
    let areaDoCirculo = pi * Math.pow(r, 2);
    return (`O perímetro do círculo é ${perimetroDoCirculo} e a área do círculo é ${areaDoCirculo}. `);
}
console.log(perimetroEarea(5));