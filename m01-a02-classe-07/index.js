function farXcel (far) {
    let cel = (far - 32)*(5/9);
    return (`A temperatura em celsius é ${cel}.`);
}
console.log (farXcel(80));