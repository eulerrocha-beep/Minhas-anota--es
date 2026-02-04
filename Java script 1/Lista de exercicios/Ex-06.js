/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
    Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

class carros {
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca,
        this.cor = cor,
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel
    }   
}

const carro1 = new carros('Fiat', 'Vermelho', 1/12);
const gastoPercurso = carro1.calcularGastoDePercurso(100, 5.50);
console.log(gastoPercurso);

const carro2 = new carros ('Palio', 'Branco', 1/10);
const gastoPercurso2 = carro2.calcularGastoDePercurso(120, 5.50);
console.log(gastoPercurso2);