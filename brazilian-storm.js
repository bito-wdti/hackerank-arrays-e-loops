const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
//
let maiorNota = 0, menorNota = Infinity, somaNotas = 0;

for (let nota of notas) {
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota;
    }
    somaNotas += nota;
}

somaNotas -= (maiorNota + menorNota);
somaNotas /= notas.length - 2;
console.log(somaNotas);