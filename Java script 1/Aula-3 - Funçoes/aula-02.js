/*
    O IMC - Indice de massa corporal e um criterio da organização Mundial de saude para dar uma indicação sobre a condição de peso de uma pessoa adulta

    Formula do IMC 
    IMC = peso / (altura * altura)

    Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do Peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsidade Grave;
*/
function calcularIMC(peso, altura) {
    const imc = peso / Math.pow(altura, 2);
    return imc;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return("Está abaixo do peso")
    } else if (imc > 18.5 && imc < 25) {
        return("Peso normal")
    } else if (imc > 25 && imc < 30) {
        return("Acima do peso")
    } else if (imc > 30 &&  imc < 40) {
        return("Obeso")
    } else {
        return("Imenso")
    }
}

function main() {
const pesoTotal = 200;
const altura = 1.78;

const imc = calcularIMC(pesoTotal, altura);

    console.log(classificarIMC(imc));
}

main();