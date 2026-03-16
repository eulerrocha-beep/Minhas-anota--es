/**
 * AULA: join() - Convertendo Array em String
 * 
 * join() transforma todos os elementos de um array em uma STRING única,
 * separados por um delimitador (padrão é vírgula).
 * 
 * Sintaxe: array.join(separador)
 * - separador: string usada para separar os elementos (padrão: ',')
 * - Retorna: uma string única
 * 
 * NOTA: join() não modifica o array original!
 */

// Criando um array de objetos com nomes
const lista = [
    {nome: 'Amanda'}, 
    {nome: 'vitor'}, 
    {nome: 'Andressa'}
]

// Encadeamento: map() -> filter() -> join()
// 1. map() extrai apenas os nomes
// 2. filter() mantém apenas nomes que começam com 'A'
// 3. join() junta em uma string com separador '; '
console.log(lista
    .map(e => e.nome)                          // ['Amanda', 'vitor', 'Andressa']
    .filter((e) => e.startsWith('A'))          // ['Amanda', 'Andressa']
    .join('; ')                                // 'Amanda; Andressa'
)

// EXEMPLOS ADICIONAIS:

// Exemplo 1: join() simples com diferentes separadores
console.log("\n--- Exemplo 1: Diferentes separadores ---")
const frutas = ["maçã", "banana", "laranja", "uva"]

console.log("Padrão (vírgula):", frutas.join())
console.log("Com hífen:", frutas.join(" - "))
console.log("Com pipe:", frutas.join(" | "))
console.log("Sem separador:", frutas.join(""))

// Exemplo 2: Criar uma lista HTML
console.log("\n--- Exemplo 2: Lista HTML ---")
const itens = ["Item 1", "Item 2", "Item 3"]
const listaHTML = `<ul><li>${itens.join("</li><li>")}</li></ul>`
console.log("HTML gerado:", listaHTML)

// Exemplo 3: Criar um caminho de arquivo
console.log("\n--- Exemplo 3: Caminho de arquivo ---")
const caminhos = ["C:", "Users", "Documents", "arquivo.txt"]
const caminhoCompleto = caminhos.join("\\")
console.log("Caminho:", caminhoCompleto)

// Exemplo 4: Criar URL com parâmetros
console.log("\n--- Exemplo 4: URL com parâmetros ---")
const params = ["id=123", "nome=joao", "ativo=true"]
const url = "https://example.com?" + params.join("&")
console.log("URL:", url)

// Exemplo 5: Join após filter e map
console.log("\n--- Exemplo 5: Combinando operações ---")
const pessoas = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 17 },
    { nome: "Carlos", idade: 30 },
    { nome: "Diana", idade: 16 }
]

const maioresFormatados = pessoas
    .filter(p => p.idade >= 18)              // Filtra maiores de 18
    .map(p => `${p.nome} (${p.idade})`)      // Mapeia para string formatada
    .join(", ")                              // Junta com vírgula e espaço

console.log("Maiores de idade:", maioresFormatados)

// Exemplo 6: join() com números
console.log("\n--- Exemplo 6: Array de números ---")
const numeros = [1, 2, 3, 4, 5]
console.log("Números em linha:", numeros.join(" - "))

// Exemplo 7: Invertendo o processo (split)
console.log("\n--- Exemplo 7: split() - O oposto de join() ---")
const texto = "JavaScript,HTML,CSS,React"
const linguagens = texto.split(",")          // Transforma string em array
const reunidos = linguagens.join(" | ")      // Transforma array em string novamente
console.log("Original:", texto)
console.log("Processado:", reunidos)

/**
 * DIFERENÇAS IMPORTANTES:
 * 
 * join() vs toString():
 * - join() permite customizar o separador
 * - toString() sempre usa vírgula como separador
 * 
 * join() vs split():
 * - join() transforma array em string
 * - split() transforma string em array (operação inversa)
 * 
 * Quando usar join():
 * ✓ Para criar strings a partir de arrays
 * ✓ Para gerar HTML dinamicamente
 * ✓ Para criar URLs
 * ✓ Para exibir dados formatados
 * ✓ Após usar map() e filter()
 * 
 * Valor padrão:
 * - Se não passar separador, usa vírgula: array.join() === array.toString()
 * - Para sem espaços: array.join("")
 * - Para lista: array.join(", ")
 * 
 * Casos de uso comuns:
 * - CSV: array.join(",")
 * - Separado por espaço: array.join(" ")
 * - Lista com bullet: array.join("\\n• ")
 * - Tags HTML: array.join("</li><li>")
 */
