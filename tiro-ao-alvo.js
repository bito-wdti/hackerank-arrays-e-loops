const disparos = [0, 10, 50, 70, 80, 30];
//
let nDisparosAcimaPontuacao = 0;

for (let pontos of disparos) {
    if (pontos > 70) {
        nDisparosAcimaPontuacao++;
    }
}

if (nDisparosAcimaPontuacao >= 3) {
    console.log(nDisparosAcimaPontuacao);
} else {
    console.log('ELIMINADO');
}