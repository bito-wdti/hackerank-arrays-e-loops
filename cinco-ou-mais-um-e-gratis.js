const precos = [100, 100, 100, 50, 1000];
if (precos.length >= 5) {
    let somaProdutos = 0, menorValor = precos[0];
    for (let p of precos) {
        somaProdutos += p;
        if (p < menorValor) {
            menorValor = p;
        }
    }
    console.log(somaProdutos - menorValor);
} else {
    let somaProdutos = 0;
    for (let p of precos) {
        somaProdutos += p;
    }
    console.log(somaProdutos);
}