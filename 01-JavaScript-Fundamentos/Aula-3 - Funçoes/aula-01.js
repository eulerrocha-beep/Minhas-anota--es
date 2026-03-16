/**
 * AULA: Funções em JavaScript
 * 
 * Funções são blocos de código reutilizáveis.
 * Permitem encapsular lógica e evitar repetição.
 * 
 * Sintaxe: function nomeDaFuncao(parametros) { corpo }
 */

/* ==========================================
   FUNÇÃO BÁSICA
   ========================================== 
   
   Cria um bloco de código que pode ser chamado múltiplas vezes
*/

// Definindo uma função simples
function saudar() {
  console.log("Olá, bem-vindo!");
}

// Chamando (executando) a função
saudar();  // Imprime: Olá, bem-vindo!


/* ==========================================
   PARÂMETROS E ARGUMENTOS
   ========================================== 
   
   Parâmetros: variáveis definidas na função
   Argumentos: valores passados ao chamar a função
*/

// Função COM parâmetros
function saudarPessoa(nome, idade) {
  console.log(`Olá ${nome}, você tem ${idade} anos!`);
}

// Chamando com argumentos
saudarPessoa("João", 25);    // Imprime: Olá João, você tem 25 anos!
saudarPessoa("Maria", 30);   // Imprime: Olá Maria, você tem 30 anos!

/*
IMPORTANTE:
- Defina parâmetros na definição: function saudar(nome)
- Passe argumentos na chamada: saudar("João")
- Parâmetros devem estar em ordem!
*/


/* ==========================================
   RETORNO DE VALORES
   ========================================== 
   
   Use 'return' para enviar um valor PARA FORA da função
   Sem return, a função retorna 'undefined'
*/

// Função SEM retorno
function imprimir(mensagem) {
  console.log(mensagem);
  // Sem return, retorna undefined
}

// Função COM retorno
function incrementarJuros(valor, percentualJuros) {
  const valorJuros = (percentualJuros / 100) * valor;
  return valor + valorJuros;  // Retorna o resultado
}

// Usando a função
const resultado1 = incrementarJuros(100, 10);  // resultado1 = 110
const resultado2 = incrementarJuros(200, 15);  // resultado2 = 230
const resultado3 = incrementarJuros(50, 5);    // resultado3 = 52.5

console.log(resultado1);  // Imprime: 110
console.log(resultado2);  // Imprime: 230
console.log(resultado3);  // Imprime: 52.5

/*
IMPORTANTE:
- return ENCERRA a função imediatamente
- Tudo após return não é executado
- Uma função pode ter múltiplos return (em different condições)
*/


/* ==========================================
   EXEMPLOS PRÁTICOS
   ========================================== */

// Exemplo 1: Calcular área de retângulo
function areaRetangulo(largura, altura) {
  return largura * altura;
}

console.log(areaRetangulo(5, 10));  // 50

// Exemplo 2: Validar email (simples)
function ehEmailValido(email) {
  return email.includes("@");  // Retorna true ou false
}

console.log(ehEmailValido("joao@email.com"));  // true
console.log(ehEmailValido("joaoemail.com"));   // false

// Exemplo 3: Função com múltiplas condições e returns
function classificarIdade(idade) {
  if (idade < 13) {
    return "Criança";
  } else if (idade < 18) {
    return "Adolescente";
  } else if (idade < 60) {
    return "Adulto";
  } else {
    return "Idoso";
  }
}

console.log(classificarIdade(10));  // Criança
console.log(classificarIdade(16));  // Adolescente
console.log(classificarIdade(35));  // Adulto
console.log(classificarIdade(70));  // Idoso

// Exemplo 4: Função que retorna um objeto
function criarUsuario(nome, email, idade) {
  return {
    nome: nome,
    email: email,
    idade: idade,
    ativo: true,
    dataCriacao: new Date()
  };
}

const usuario1 = criarUsuario("João", "joao@email.com", 25);
console.log(usuario1);
// Imprime: { nome: 'João', email: 'joao@email.com', idade: 25, ... }

// Exemplo 5: Função que retorna um array
function gerarNumerosAte(limite) {
  const numeros = [];
  for (let i = 1; i <= limite; i++) {
    numeros.push(i);
  }
  return numeros;
}

console.log(gerarNumerosAte(5));  // [1, 2, 3, 4, 5]


/* ==========================================
   PARÂMETROS PADRÃO (DEFAULT)
   ========================================== 
   
   Defina um valor padrão para parâmetros
   Se o argumento não for passado, usa o padrão
*/

function saudacaoCompleta(nome, saudacao = "Olá") {
  return `${saudacao}, ${nome}!`;
}

console.log(saudacaoCompleta("João"));           // Olá, João! (usa default)
console.log(saudacaoCompleta("João", "Bom dia")); // Bom dia, João!

// Outro exemplo
function calcularDesconto(valor, desconto = 0) {
  return valor - (valor * desconto / 100);
}

console.log(calcularDesconto(100));      // 100 (sem desconto)
console.log(calcularDesconto(100, 10));  // 90 (10% de desconto)


/* ==========================================
   ARROW FUNCTIONS (Funções Seta)
   ========================================== 
   
   Sintaxe moderna e mais concisa
   Sintaxe: (parametros) => { corpo }
*/

// Arrow function simples
const dobrar = (numero) => {
  return numero * 2;
};

console.log(dobrar(5));  // 10

// Arrow function com return implícito (sem {})
const triplicar = (numero) => numero * 3;

console.log(triplicar(5));  // 15

// Arrow function com múltiplos parâmetros
const somar = (a, b) => a + b;

console.log(somar(5, 10));  // 15

// Arrow function com um parâmetro (sem parênteses)
const quadrado = numero => numero * numero;

console.log(quadrado(5));  // 25

// Arrow function sem parâmetros
const obterMensagem = () => "Olá mundo!";

console.log(obterMensagem());  // Olá mundo!


/* ==========================================
   ESCOPO DE FUNÇÕES
   ========================================== 
   
   Variáveis definidas DENTRO da função têm escopo LOCAL
   Não podem ser acessadas FORA da função
*/

function testarEscopo() {
  const variavel = "Estou dentro da função";
  console.log(variavel);  // Funciona
}

testarEscopo();
// console.log(variavel);  // ❌ Erro! variavel não existe aqui

// Variáveis GLOBAIS (fora da função) podem ser acessadas dentro
const globalVar = "Sou global";

function acessarGlobal() {
  console.log(globalVar);  // Funciona! Acessa variável global
}

acessarGlobal();  // Imprime: Sou global


/* ==========================================
   FUNÇÕES COM ARRAY
   ========================================== */

// Função que processa um array
function somarTodos(numeros) {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  return total;
}

console.log(somarTodos([1, 2, 3, 4, 5]));  // 15

// Função que retorna um novo array
function duplicarValores(numeros) {
  return numeros.map(num => num * 2);
}

console.log(duplicarValores([1, 2, 3]));  // [2, 4, 6]


/* ==========================================
   FUNÇÕES COM OBJETOS
   ========================================== */

// Função que recebe um objeto
function exibirPessoa(pessoa) {
  console.log(`Nome: ${pessoa.nome}`);
  console.log(`Idade: ${pessoa.idade}`);
  console.log(`Profissão: ${pessoa.profissao}`);
}

const joao = {
  nome: "João",
  idade: 25,
  profissao: "Desenvolvedor"
};

exibirPessoa(joao);

// Função que retorna um objeto
function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
    descrever() {
      return `${this.nome} tem ${this.idade} anos`;
    }
  };
}

const maria = criarPessoa("Maria", 30);
console.log(maria.descrever());  // Maria tem 30 anos


/**
 * RESUMO FINAL:
 * 
 * TIPOS DE FUNÇÕES:
 * ✅ function nomeDaFuncao() { } (tradicional)
 * ✅ const funcao = () => { } (arrow function)
 * 
 * ELEMENTOS IMPORTANTES:
 * - Parâmetros: inputs da função
 * - Return: saída da função
 * - Escopo: variáveis locais vs globais
 * - Reutilização: uma função pode ser chamada múltiplas vezes
 * 
 * BOAS PRÁTICAS:
 * ✅ Use nomes descritivos (calcularTotalCompra, nãoCalc)
 * ✅ Uma função deve fazer UMA coisa bem
 * ✅ Use parâmetros padrão quando apropriado
 * ✅ Use arrow functions para funções simples
 * ✅ Use return para enviar dados para fora
 * 
 * ❌ EVITE:
 * ❌ Funções muito longas (mais de 20 linhas)
 * ❌ Funções com muitos parâmetros (mais de 3)
 * ❌ Nomes vagos (func, calcula, dados)
 * ❌ Funções que modificam variáveis globais sem necessidade
 * 
 * PRÓXIMOS TÓPICOS:
 * → Callbacks
 * → Promises
 * → Async/Await
 * → Closures
 */