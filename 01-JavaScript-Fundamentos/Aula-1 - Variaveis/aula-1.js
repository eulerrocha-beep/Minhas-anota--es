/**
 * AULA 1: VARIÁVEIS EM JAVASCRIPT
 * 
 * Variáveis são "contêineres" para armazenar valores.
 * 
 * Existem 3 formas de declarar variáveis em JavaScript:
 * - var (antigo - evite usar)
 * - let (moderno - USE ESTE!)
 * - const (moderno - USE ESTE!)
 */

// ==========================================
// DECLARANDO COM LET (recomendado)
// ==========================================

// let: Variável que PODE ser alterada
let number = 2 + 20;  // number = 22
console.log(number);  // Imprime: 22

number = 10;  // Podemos reatribuir o valor
console.log(number);  // Imprime: 10

let nome = "João";
let idade = 25;
let altura = 1.75;

// ==========================================
// DECLARANDO COM CONST (recomendado)
// ==========================================

// const: Variável que NÃO PODE ser alterada (constante)
// IMPORTANTE: Use const por padrão!
const juros = '';  // Valor vazio
const PI = 3.14159;
const URL_API = "https://api.example.com";

// Tentando reatribuir uma const causará erro:
// juros = 10;  // ❌ TypeError: Assignment to constant variable

// ENTRETANTO: Objetos e arrays podem ter conteúdo modificado com const
const pessoa = { nome: "Maria", idade: 30 };
pessoa.idade = 31;  // ✅ Isso é permitido! (modifica a propriedade, não reatribui)
console.log(pessoa.idade);  // Imprime: 31

const lista = [1, 2, 3];
lista.push(4);  // ✅ Isso é permitido! (modifica o array, não reatribui)
console.log(lista);  // Imprime: [1, 2, 3, 4]

// ==========================================
// DECLARANDO COM VAR (antigo - EVITE!)
// ==========================================

var valorAntigo = 100;  // ❌ Não recomendado
// var tem problemas de escopo (function scope vs block scope)
// Use var apenas se precisar suportar navegadores muito antigos

// ==========================================
// DIFERENÇAS ENTRE let, const E var
// ==========================================

/**
 * COMPARAÇÃO DETALHADA:
 * 
 * ┌──────────────┬────────────┬───────────┬──────────┐
 * │   Tipo       │ Reatribuir │ Redeclarar│ Escopo   │
 * ├──────────────┼────────────┼───────────┼──────────┤
 * │ const        │     ❌     │     ❌    │ Block    │
 * │ let          │     ✅     │     ❌    │ Block    │
 * │ var          │     ✅     │     ✅    │ Function │
 * └──────────────┴────────────┴───────────┴──────────┘
 * 
 * ESCOPO:
 * - Block scope: { let x = 1; } - x não existe fora do bloco
 * - Function scope: var x = 1; - x existe em toda a função
 * 
 * RECOMENDAÇÃO:
 * 1º opção: USE const (por padrão)
 * 2º opção: USE let (quando precisa reatribuir)
 * 3º opção: EVITE var (problemas de escopo)
 */

// ==========================================
// EXEMPLOS PRÁTICOS
// ==========================================

console.log("\n--- Exemplo 1: Variáveis básicas ---");
let contador = 0;
const INCREMENTO = 1;

contador += INCREMENTO;  // contador = 1
console.log("Contador:", contador);

console.log("\n--- Exemplo 2: Tipos de dados ---");
let texto = "JavaScript";      // String
let numero = 42;               // Number
let decimal = 3.14;            // Number (decimal)
let booleano = true;           // Boolean
let indefinido = undefined;    // Undefined
let vazio = null;              // Null

console.log(typeof texto);     // Imprime: string
console.log(typeof numero);    // Imprime: number
console.log(typeof booleano);  // Imprime: boolean

console.log("\n--- Exemplo 3: Nomeando variáveis ---");
// Boas práticas de nomenclatura:
const meuNome = "João";        // camelCase ✅
const MINHA_CONSTANTE = 10;    // UPPER_SNAKE_CASE para constantes ✅
let userAge = 25;              // camelCase ✅
// let user-age = 25;           // ❌ Hífen não é permitido

console.log("\n--- Exemplo 4: Escopo de let vs var ---");
if (true) {
    let x = 10;  // Escopo do bloco if
    var y = 20;  // Escopo da função (ou global)
}
// console.log(x);  // ❌ ReferenceError: x is not defined
console.log(y);    // ✅ Imprime: 20

/**
 * RESUMO FINAL:
 * 
 * ✅ Sempre use const por padrão
 * ✅ Use let quando precisar reatribuir
 * ❌ Evite usar var
 * ✅ Use nomes descritivos (meuNome, nãoMeuN)
 * ✅ Use UPPER_CASE para constantes globais
 * ✅ Entenda que const não torna objetos imutáveis!
 * 
 * Exemplo de boa prática:
 * const usuario = { nome: "João", idade: 25 };
 * usuario.idade = 26;  // ✅ Permitido (modifica propriedade)
 * usuario = {};        // ❌ Erro (tenta reatribuir)
 */


