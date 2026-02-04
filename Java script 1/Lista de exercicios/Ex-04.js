function escreverNome (nome) {
    return ("Meu nome é " + nome);
}


function verificarIdade (idade, nome) {
    if (idade >= 18) {
        console.log(escreverNome(nome) + ' ele é maior de idade');
    } else {
        console.log(escreverNome(nome) + ' ele é menor de idade');
    }
}
verificarIdade(20, "marcio");
