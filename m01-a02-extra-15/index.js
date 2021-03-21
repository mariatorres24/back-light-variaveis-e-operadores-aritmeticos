function baskhara(a, b, c) {
    let delta = Math.pow(b,2) - (4*a*c);
    if(delta > 0){
        let x1 = (-b + (Math.sqrt(delta)))/(2*a);
        let x2 = (-b - (Math.sqrt(delta)))/(2*a);
        return (`O valor de x1 é ${x1} e de x2 é ${x2}.`);
    }
    return (`A equação de 2º grau não possui raízes reais!`);
}
console.log(baskhara(1, 2, -15));