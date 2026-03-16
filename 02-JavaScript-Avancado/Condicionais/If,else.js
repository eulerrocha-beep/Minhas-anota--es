//if é uma estrutura condicional que executa um bloco de codigo se uma condicao for verdadeira
//else é uma estrutura condicional que executa um bloco de codigo se a condicao do if for falsa
//else if é uma estrutura condicional que permite verificar multiplas condicoes

let ehLigado = true;

if (ehLigado) {
    console.log("executou comando");
} else {
    console.log("Nao executou comando");
}


let possuiOvos = false;
let itensComprados = ""

if (possuiOvos) {
    itensComprados = "Leite, Pao, Ovos";
}else {
    itensComprados = "Comprar lasanha pronta";
}
   



console.log("itensComprados:" + itensComprados);