// faça um programa para calcular o valor de uma viagem 

// voce tera 3 variaveis sendo elas: 
// Preço do combustivel; 
// Gasto media de combustivel do carro por KM
// Distancia em KM da viagem 

// Imprima no console o valor que sera gasto para realizar a viagem


let preço = "6.50";
let media = "11";
let km = "300";

const viagem = km / media * preço

console.log(`Foi gasto na viagem ${viagem.toFixed(2)}`);