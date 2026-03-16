/* Faça um programa para calcular o valor de uma viagem 
    
    voce tera 5 variaveis sendo elas: 
    Preço do combustivel; 
    Gasto media de combustivel do carro por KM
    Distancia em KM da viagem
    Gasto medio de combustivel do carro por KM
 

    Imprima no console o valor que sera gasto para realizar a viagem */

const isPrecoEtanol = 5.7;
const isPrecoGasoline = 10.5;
const isTipoCombustivel = 'etanol';

const isMedia = 10;

const isDistancia = 360;

const isLitrosConsumidos = isDistancia / isMedia;
let valorGasto = isLitrosConsumidos * isTipoCombustivel


if (isTipoCombustivel === 'etanol') {
    valorGasto = isLitrosConsumidos * isPrecoEtanol
    console.log(`Foi Gasto ${valorGasto.toFixed(2)}Reais`)
} else if (isTipoCombustivel === 'gasoline') {
    valorGasto = isLitrosConsumidos * isPrecoGasoline
    console.log(`Foi Gasto ${valorGasto.toFixed(2)}Reais`)
} else {
    console.log ('Tipo inválido');
}