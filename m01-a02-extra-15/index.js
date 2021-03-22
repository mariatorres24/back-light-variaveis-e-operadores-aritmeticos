//vamo calcular a fórmula do másckara 

let deltaABC = (a,b,c) => {

    return (Math.pow(b, 2)) - (4*a*c);

}

console.log(`delta: ${deltaABC(2,2,2)}`);