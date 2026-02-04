const numero = 11;

const isNumeroPar = (numero % 5) === 0;

console.log(NumeroPar);

/* = Atribuição
   == igualdade ignora o tipo da variavel e faz uma conversão implicita
   === para fazer as comparações 
*/

if (numero === 0) {
    console.log("O numero é Invalido")
} else if (isNumeroPar) {
    console.log("Sim");
} else {
    console.log ("Não");
} 

/*
    se a condição passada for verdadeira ele executa o codigo

    ! e uma condição de negação se for false executa o codigo

    is e o prefixo colocado quando uma variavel e boleana
*/