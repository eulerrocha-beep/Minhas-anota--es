const { gets, print} = require('./Funcões-auxiliares.js');

/*

Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o mair número sorteado

Dados de entrada: 
5
10
50
20
98

Saida: 
98

*/
const quantidadeAlunos = gets();
const numerosSorteados = [];

for (let i = 0; i < quantidadeAlunos; i++)  {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0 ;

for (let i = 0; i < numerosSorteados.length; i++) {
    if (numerosSorteados[i] > maiorValor) {
        maiorValor = numerosSorteados[i];
    }
}
print(maiorValor);


