const resultados = [
    "V",
    "E",
    "V",
    "E"
  ];
//
let pontuacao = 0;
for (let partida of resultados) {
    if (partida === 'V') {
        pontuacao += 3;
    } else if (partida === 'E') {
        pontuacao++;
    }
}
console.log(pontuacao);