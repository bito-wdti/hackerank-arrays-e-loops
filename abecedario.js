const letra = 'm';
const palavras = ["mamao", "maca", "melao", "melancia", "laranja", 'maracuja', 'caja'];
let contador = 0;
for (let p of palavras) {
    if (p[0] !== letra) {
        contador++;
    }
}
console.log(contador);