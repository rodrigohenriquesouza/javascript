let dados = [ 1, -5, 3, 7, -8, 10]
dados.sort((a, b ) => a - b )
//console.log(dados)

/*
for (let pos = 0; pos < dados.length; pos++) {
    console.log(`A posição ${pos} dos vetores são referente ao valor ${dados[pos]}`)
}
*/

for (let pos in dados) {
    console.log(`A posição ${pos} tem o valor ${dados[pos]}`)
}