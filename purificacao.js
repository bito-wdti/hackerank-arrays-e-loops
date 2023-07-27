stringPurificada = '';
for (let letra of stringCorrompida) {
    switch (letra) {
        case '!':
            break;
        case '@':
            break;
        case '#':
            break;
        case '$':
            break;
        case '%':
            break;
        case '&':
            break;
        case '*':
            break;
        case '(':
            break;
        case ')':
            break; 
        default:
            stringPurificada += letra;                                                                       
    }
}
console.log(stringPurificada);


