// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

let listaDeNumeros  = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < listaDeNumeros.length; i++) {
    let numeroAtual = listaDeNumeros[i];
    if (numeroAtual % 2 === 0) {
        console.log(numeroAtual);
    }
}