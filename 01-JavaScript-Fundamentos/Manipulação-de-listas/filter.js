/**
 * AULA: filter() - Filtrando elementos de um Array
 * 
 * filter() cria um NOVO array apenas com os elementos que atendem uma condição.
 * A função deve retornar true (mantém o elemento) ou false (remove o elemento).
 * 
 * Sintaxe: array.filter((element, index, array) => { return condição })
 * 
 * IMPORTANTE: filter() não modifica o array original!
 */

// Criando um array com números de 1 a 10
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filtrando apenas os números PARES
// element % 2 === 0 significa: elemento dividido por 2 com resto 0 (é par)
const listaDeNumerosPares = lista.filter((element) => {
    return element % 2 === 0 
})

console.log("Array original:", lista)
console.log("Apenas pares:", listaDeNumerosPares)

// EXEMPLOS ADICIONAIS:

// Exemplo 1: Filtrando números maiores que um valor
console.log("\n--- Exemplo 1: Números maiores que 5 ---")
const maioreQue5 = lista.filter((num) => num > 5)
console.log("Números > 5:", maioreQue5)

// Exemplo 2: Filtrando números ímpares
console.log("\n--- Exemplo 2: Números ÍMPARES ---")
const listaDeNumerosImpares = lista.filter((element) => {
    return element % 2 !== 0  // resto diferente de 0 = ímpar
})
console.log("Apenas ímpares:", listaDeNumerosImpares)

// Exemplo 3: Filtrar objetos por propriedade
console.log("\n--- Exemplo 3: Filtrando pessoas maiores de idade ---")
const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 17 },
    { nome: "Pedro", idade: 35 },
    { nome: "Ana", idade: 16 }
]

const maioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18)
console.log("Maiores de idade:", maioresDeIdade)

// Exemplo 4: Filtrar strings que começam com uma letra
console.log("\n--- Exemplo 4: Nomes começados com 'A' ---")
const nomes = ["Alice", "Bob", "Ana", "Carlos", "Amanda"]
const nomesComA = nomes.filter((nome) => nome.startsWith('A'))
console.log("Nomes com 'A':", nomesComA)

// Exemplo 5: Remover duplicatas
console.log("\n--- Exemplo 5: Removendo duplicatas ---")
const numeriComRepetidos = [1, 2, 2, 3, 3, 3, 4, 5, 5]
const semRepetidas = numeriComRepetidos.filter((valor, indice, array) => {
    return array.indexOf(valor) === indice  // Mantém apenas a primeira ocorrência
})
console.log("Sem repetidas:", semRepetidas)

// Exemplo 6: Combinando filter() com map()
console.log("\n--- Exemplo 6: Filter + Map (números pares x 10) ---")
const paresVezesDez = lista
    .filter((num) => num % 2 === 0)
    .map((num) => num * 10)
console.log("Pares x 10:", paresVezesDez)

/**
 * DIFERENÇAS IMPORTANTES:
 * 
 * filter() vs map():
 * - filter() reduz a quantidade de elementos
 * - map() mantém a quantidade de elementos
 * - filter() precisa de uma condição (true/false)
 * - map() transforma cada elemento
 * 
 * filter() vs find():
 * - filter() retorna um array com TODOS que atendem a condição
 * - find() retorna apenas o PRIMEIRO que atende a condição (ou undefined)
 * 
 * Quando usar filter():
 * ✓ Para remover elementos que não atendem uma condição
 * ✓ Para buscar múltiplos resultados
 * ✓ Para validar dados
 * ✓ Quando você quer um novo array reduzido
 * 
 * Encadeamento (chaining):
 * Você pode combinar filter() com map(), reduce(), etc.
 * Exemplo: array.filter(...).map(...).reduce(...)
 */