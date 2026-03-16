/**
 * AULA: forEach() - Iterando sobre elementos de um Array
 * 
 * forEach() é um método que executa uma função para cada elemento do array.
 * Diferente do map(), forEach() não retorna um novo array, apenas executa a ação.
 * 
 * Sintaxe: array.forEach((element, index, array) => { ... })
 * - element: o valor atual do elemento
 * - index: a posição do elemento (começa em 0)
 * - array: referência do array original
 */

// Criando um array com números de 1 a 10
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Executando uma função para cada elemento
// Neste caso, somamos o valor com seu índice e exibimos no console
lista.forEach((value, i, listRef) => {
    console.log(value + i )  // Soma o valor com o índice
});

// EXEMPLO ADICIONAL: Exemplos práticos do forEach()

// Exemplo 1: Apenas acessar cada elemento
console.log("\n--- Exemplo 1: Acessando cada elemento ---")
lista.forEach((numero) => {
    console.log(`Número: ${numero}`)
})

// Exemplo 2: Usar o índice para operações
console.log("\n--- Exemplo 2: Usando índice ---")
lista.forEach((numero, indice) => {
    console.log(`Posição ${indice}: Valor ${numero}`)
})

// Exemplo 3: Array de objetos
console.log("\n--- Exemplo 3: Array de objetos ---")
const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 35 }
]

pessoas.forEach((pessoa, indice) => {
    console.log(`${indice + 1}. ${pessoa.nome} tem ${pessoa.idade} anos`)
})

// Exemplo 4: Modificar elemento no DOM (exemplo teórico)
console.log("\n--- Exemplo 4: Processando dados ---")
const precos = [10.50, 20.30, 15.99]
let totalCarrinho = 0

precos.forEach((preco) => {
    totalCarrinho += preco  // Acumula o total
})

console.log(`Total do carrinho: R$ ${totalCarrinho.toFixed(2)}`)

/**
 * DIFERENÇAS IMPORTANTES:
 * 
 * forEach() vs map():
 * - forEach() não retorna nada (retorna undefined)
 * - map() retorna um novo array
 * - forEach() é melhor para efeitos colaterais (console.log, modificar DOM)
 * - map() é melhor quando você quer transformar os dados
 * 
 * Quando usar forEach():
 * ✓ Para imprimir dados no console
 * ✓ Para atualizar elementos no DOM
 * ✓ Para fazer requisições HTTP
 * ✓ Para executar ações que não geram um novo array
 * 
 * Quando usar map():
 * ✓ Para transformar dados
 * ✓ Quando você precisa do novo array resultante
 * ✓ Programação funcional/imutável
 */