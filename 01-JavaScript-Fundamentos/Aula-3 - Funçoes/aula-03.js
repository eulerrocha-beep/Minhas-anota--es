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