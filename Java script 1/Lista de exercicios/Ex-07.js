/*
    2 Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (Índice de Massa Corporal)
    e dizer se estão acima, abaixo ou na faixa de peso ideal (IMC entre 18.5 e 25).
    instacie uma pessoa chamada José que pesa 70kg e tem 1,75 de altura e peça para
*/

class Pessoa {
    constructor (nome, peso, altura) {
        this.nome = nome, 
        this.peso = peso,
        this.altura = altura
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    faixaPeso() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return 'Abaixo do peso ideal';
        } else if (imc > 25) {
            return 'Acima do peso ideal';
        } else {
            return 'Peso ideal';
        }
    }
}

const pessoa1 = new Pessoa('José', 70, 1.75);
const imc = pessoa1.calcularIMC(), faixa = pessoa1.faixaPeso();
console.log(`O IMC de ${pessoa1.nome} é ${imc.toFixed(2)} e está na faixa ${faixa}`);

