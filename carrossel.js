const sequencia = '>>>>>>>>>';
let contador = 0;
for (let letra of sequencia) {
    if (letra === '>') {
        contador++;
    } else {
        contador--;
    }
    
    if (contador < 0) {
        contador = 6;
    } else if (contador > 6) {
        contador = 0;
    }
}
console.log(contador);