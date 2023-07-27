const precos = [5, 10, 3];
let difMinima = Infinity;
for (let pos = 0; pos < precos.length - 1; pos++) {
    for (let posDif in precos) {
        if (posDif > pos) {
            let sub = (precos[pos] - precos[posDif]);
            if (sub >= 0 && sub < difMinima) {
                difMinima = sub;
            }
        }
    }   
}
console.log(difMinima);
