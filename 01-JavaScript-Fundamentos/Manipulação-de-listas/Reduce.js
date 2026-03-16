/**
 * AULA: reduce() - Reduzindo um Array a um Valor Único
 * 
 * reduce() processa cada elemento do array com uma função acumuladora
 * para reduzir o array a um ÚNICO valor.
 * 
 * Sintaxe: array.reduce((accumulator, current, index, array) => { ... }, valorInicial)
 * 
 * - accumulator: o valor acumulado (começa com valorInicial ou primeiro elemento)
 * - current: o elemento atual sendo processado
 * - index: a posição do elemento
 * - array: o array original
 * - valorInicial: valor inicial do acumulador (opcional)
 */

// Criando um array com números de 1 a 10
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Somando TODOS os números do array
// previous = acumulador (começa com 0, padrão ou primeiro elemento)
// curremt = elemento atual (nota: há erro de digitação 'curremt', mas mantive para não quebrar código)
const somaDeTodosOsNumeros = lista.reduce((previous, curremt) => {
    return previous + curremt  // Acumula a soma
})

console.log("Soma de todos os números:", somaDeTodosOsNumeros)

// EXEMPLOS ADICIONAIS:

// Exemplo 1: Soma com valor inicial explícito
console.log("\n--- Exemplo 1: Soma com valor inicial ---")
const somaComInicial = lista.reduce((acc, num) => {
    return acc + num
}, 0)  // Começando com 0
console.log("Soma (começando em 0):", somaComInicial)

// Exemplo 2: Multiplicação de todos os números
console.log("\n--- Exemplo 2: Multiplicação ---")
const multiplicacao = lista.reduce((acc, num) => {
    return acc * num
}, 1)  // Começando com 1 (elemento neutro da multiplicação)
console.log("Multiplicação:", multiplicacao)

// Exemplo 3: Encontrar o maior número
console.log("\n--- Exemplo 3: Encontrar o máximo ---")
const maiorNumero = lista.reduce((maior, num) => {
    return num > maior ? num : maior
})
console.log("Maior número:", maiorNumero)

// Exemplo 4: Encontrar o menor número
console.log("\n--- Exemplo 4: Encontrar o mínimo ---")
const menorNumero = lista.reduce((menor, num) => {
    return num < menor ? num : menor
})
console.log("Menor número:", menorNumero)

// Exemplo 5: Contar ocorrências em um array
console.log("\n--- Exemplo 5: Contando ocorrências ---")
const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]
const contagem = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1
    return acc
}, {})
console.log("Contagem de frutas:", contagem)

// Exemplo 6: Concatenar strings
console.log("\n--- Exemplo 6: Concatenar strings ---")
const palavras = ["Olá", "mundo", "com", "reduce"]
const frase = palavras.reduce((acc, palavra) => {
    return acc + " " + palavra
})
console.log("Frase:", frase.trim())

// Exemplo 7: Soma de preços de um carrinho
console.log("\n--- Exemplo 7: Total do carrinho ---")
const itens = [
    { nome: "Produto A", preco: 10.50 },
    { nome: "Produto B", preco: 25.00 },
    { nome: "Produto C", preco: 15.99 }
]
const total = itens.reduce((acc, item) => {
    return acc + item.preco
}, 0)
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`)

// Exemplo 8: Transformar array em um objeto
console.log("\n--- Exemplo 8: Array para Objeto ---")
const pessoas = ["João", "Maria", "Pedro"]
const pessoasObj = pessoas.reduce((acc, pessoa, indice) => {
    acc[indice + 1] = pessoa
    return acc
}, {})
console.log("Pessoas como objeto:", pessoasObj)

/**
 * DIFERENÇAS IMPORTANTES:
 * 
 * reduce() vs forEach():
 * - reduce() retorna um valor único
 * - forEach() executa e retorna undefined
 * 
 * reduce() vs map():
 * - reduce() reduz array a um valor
 * - map() cria novo array com transformações
 * 
 * Quando usar reduce():
 * ✓ Para somar/multiplicar todos os elementos
 * ✓ Para encontrar máximo/mínimo
 * ✓ Para transformar array em objeto
 * ✓ Para contar ocorrências
 * ✓ Para concatenar strings
 * ✓ Para calcular totais
 * 
 * Sintaxe simplificada:
 * - Com valor inicial: reduce((acc, curr) => acc + curr, 0)
 * - Sem valor inicial: reduce((acc, curr) => acc + curr)
 * 
 * CUIDADO:
 * ⚠ Sem valor inicial e array vazio = erro
 * ⚠ Escolher valor inicial correto (0 para soma, 1 para multiplicação, etc)
 */