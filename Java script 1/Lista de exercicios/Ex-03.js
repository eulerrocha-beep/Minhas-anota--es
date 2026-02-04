/* 
    Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta e a escolha da condição de pagamento.

    Ultilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.


    Codigo Condição de pagamento 
    - A vista Debito,  recebe 10% de desconto;
    - A vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/


let isprecoEtiqueta = 7899;
let isdebito = false;
let isdinheiroPix = false;
let isparceladoTresVezes = true;

const precoDebito = isprecoEtiqueta * 0.9;
const precoDinheiroPix = isprecoEtiqueta * 0.85;
const duasVezes = isprecoEtiqueta;
const trezOuMais = isprecoEtiqueta * 1.1;

if (isdebito) {
    console.log(`Voce recebeu 10% de desconto ficou ${precoDebito}R$`, );
} else if (isdinheiroPix) {
    console.log(`Voce recebeu 15% de desconto ficou ${precoDinheiroPix}R$`);
} else if (isparceladoTresVezes) {
    console.log(`A compra fica 10% mais cara, ficou ${trezOuMais.toFixed(2)}R$`);
} else {
    console.log(`O valor em duas vezes é duas parcelas de ${(isprecoEtiqueta / 2).toFixed(2)} totalizando ${isprecoEtiqueta}`);
};