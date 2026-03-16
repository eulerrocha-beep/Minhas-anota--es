/**
 * AULA: map() - Transformando elementos de um Array
 * 
 * map() é um método que cria um NOVO array com o resultado de uma função
 * aplicada em cada elemento do array original.
 * 
 * Sintaxe: array.map((element, index, array) => { ... })
 * 
 * IMPORTANTE: map() sempre retorna um novo array com o mesmo tamanho
 * do array original, NUNCA modificando o original.
 */

// Definindo uma classe simples para representar pessoas
class Pessoa {
    constructor(name) {
        this.name = name
    }
}

// Criando um array de objetos Pessoa
const lista = [new Pessoa('Renan'), new Pessoa('Andressa'), new Pessoa('Vitor'), new Pessoa('Paula')]

// Transformando o array de Pessoas em um array de strings HTML
const listaNomes = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    `
})

console.log(listaNomes)

// EXEMPLOS ADICIONAIS:

// Exemplo 1: Transformar números
console.log("\n--- Exemplo 1: Dobrando números ---")
const numeros = [1, 2, 3, 4, 5]
const numerosDobrados = numeros.map((num) => num * 2)
console.log("Original:", numeros)
console.log("Dobrados:", numerosDobrados)

// Exemplo 2: Extrair propriedade de objetos
console.log("\n--- Exemplo 2: Extraindo idades ---")
const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 35 }
]

const idades = pessoas.map((pessoa) => pessoa.idade)
console.log("Idades:", idades)

// Exemplo 3: Converter strings para números
console.log("\n--- Exemplo 3: Convertendo strings para números ---")
const stringNumeros = ["10", "20", "30", "40"]
const numerosConvertidos = stringNumeros.map((str) => parseInt(str))
console.log("Original (strings):", stringNumeros)
console.log("Convertidos (números):", numerosConvertidos)

// Exemplo 4: Criar objetos novos a partir de um array
console.log("\n--- Exemplo 4: Criando novos objetos ---")
const nomes = ["Alice", "Bob", "Carlos"]
const novasPessoas = nomes.map((nome, indice) => ({
    id: indice + 1,
    nome: nome,
    email: `${nome.toLowerCase()}@example.com`
}))
console.log(novasPessoas)

/**
 * DIFERENÇAS IMPORTANTES:
 * 
 * map() vs forEach():
 * - map() RETORNA um novo array
 * - forEach() NÃO retorna nada (retorna undefined)
 * - map() é melhor para TRANSFORMAR dados
 * - forEach() é melhor para EFEITOS COLATERAIS
 * 
 * map() vs filter():
 * - map() transforma cada elemento mantendo a quantidade
 * - filter() reduz a quantidade de elementos baseado em condição
 * 
 * Quando usar map():
 * ✓ Para converter um array em outro array diferente
 * ✓ Para extrair propriedades de objetos
 * ✓ Para processar cada elemento sem alterar o original
 * ✓ Programação funcional
 * 
 * Exemplo de quando NÃO usar map():
 * ✗ Quando você só quer efeitos colaterais (use forEach)
 * ✗ Quando você quer filtrar dados (use filter)
 * ✗ Quando você quer um valor único (use reduce)
 */