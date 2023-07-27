const primeiraLetra = 'c';
const segundaLetra = 'v';
const palavras = ['aveia', 'manha', 'ave'];
//
let contemPalavraComLetra = false;

for (let p of palavras) {
    if (p[0] === primeiraLetra && p[1] === segundaLetra) {
        console.log(p); 
        contemPalavraComLetra = true;  
    }
}

if (!contemPalavraComLetra) {
    console.log('NENHUMA');
}