/**
 * AULA 2: ESTRUTURAS CONDICIONAIS (if, else if, else)
 * 
 * Estruturas condicionais permitem executar diferentes blocos de código
 * dependendo de uma condição ser verdadeira ou falsa.
 * 
 * Fluxo de controle: if → else if → else
 */

// ==========================================
// EXEMPLO BÁSICO
// ==========================================

const numero = 11;

// Verifica se o número é múltiplo de 5
// % = operador módulo (resto da divisão)
// 11 % 5 = 1 (resto), então 1 === 0 é false
const isNumeroPar = (numero % 5) === 0;

console.log(isNumeroPar);  // Imprime: false

// ==========================================
// OPERADORES DE COMPARAÇÃO
// ==========================================

/**
 * = Atribuição (um sinal)
 *    Exemplo: let x = 5;
 * 
 * == Igualdade com conversão de tipo (dois sinais)
 *    Converte os tipos para comparar
 *    5 == "5" → true (número convertido para string)
 *    ❌ EVITE USAR ESTE!
 * 
 * === Igualdade ESTRITA (três sinais)
 *    Compara sem converter tipos
 *    5 === "5" → false (tipos diferentes)
 *    ✅ USE SEMPRE ESTE!
 * 
 * != Desigualdade com conversão
 *    5 != "6" → true
 * 
 * !== Desigualdade estrita (recomendado)
 *    5 !== "5" → true
 * 
 * > Maior que
 * < Menor que
 * >= Maior ou igual
 * <= Menor ou igual
 */

// ==========================================
// ESTRUTURA if
// ==========================================

// Se a condição for verdadeira, executa o bloco de código
if (numero === 0) {
    console.log("O numero é Invalido");
}

// ==========================================
// ESTRUTURA if...else
// ==========================================

// Se a primeira condição for falsa, executa o bloco else
if (numero > 0) {
    console.log("Número positivo");
} else {
    console.log("Número não-positivo");
}

// ==========================================
// ESTRUTURA if...else if...else
// ==========================================

// Múltiplas condições (VERDADEIRA para este exemplo)
if (numero === 0) {
    console.log("O numero é zero");
} else if (isNumeroPar) {
    console.log("O número é múltiplo de 5");
} else {
    console.log("O número não é múltiplo de 5");
}

// ==========================================
// OPERADOR DE NEGAÇÃO (!)
// ==========================================

/**
 * ! é o operador NOT (negação)
 * Inverte o resultado de uma condição:
 * - !true → false
 * - !false → true
 */

const ativo = true;
if (!ativo) {  // Se NÃO ativo (ou seja, se inativo)
    console.log("Usuário inativo");
}

// EXEMPLO: Verificar se NÃO é par
const numeroPar = 10 % 2 === 0;
if (!numeroPar) {
    console.log("Número é ímpar");
}

// ==========================================
// OPERADORES LÓGICOS
// ==========================================

/**
 * && (AND - E lógico)
 * Retorna true APENAS se TODAS as condições forem verdadeiras
 * Exemplo: if (idade >= 18 && temCPF)
 * 
 * || (OR - OU lógico)
 * Retorna true se PELO MENOS UMA condição for verdadeira
 * Exemplo: if (admin || moderador)
 * 
 * ! (NOT - NÃO lógico)
 * Inverte o resultado da condição
 * Exemplo: if (!ativo)
 */

const idade = 25;
const temCPF = true;
const ehMaiorIdade = idade >= 18;

// Usando && (E lógico)
if (ehMaiorIdade && temCPF) {
    console.log("Pode abrir conta bancária");
}

// Usando || (OU lógico)
const ehAdmin = false;
const ehModerador = true;

if (ehAdmin || ehModerador) {
    console.log("Pode moderar conteúdo");
}

// Combinando operadores
if ((idade >= 18 && temCPF) || ehAdmin) {
    console.log("Acesso concedido");
}

// ==========================================
// BOAS PRÁTICAS COM VARIÁVEIS BOOLEANAS
// ==========================================

/**
 * CONVENÇÃO: Variáveis booleanas costumam começar com:
 * - is (isValido, isAtivo, isEnviado)
 * - has (hasPermissao, hasGPS)
 * - can (canDelete, canEdit)
 * - should (shouldNotify, shouldUpdate)
 * - will (willRepeat, willDelete)
 * 
 * Exemplo:
 */

const isValido = true;
const isAtivo = true;
const hasPermissao = true;
const canDelete = true;
const shouldNotify = false;

if (isValido && hasPermissao && canDelete) {
    console.log("Ação permitida!");
}

// ==========================================
// EXEMPLOS PRÁTICOS
// ==========================================

console.log("\n--- Exemplo 1: Validar idade ---");
const idade_pessoa = 20;

if (idade_pessoa < 13) {
    console.log("Menor de 13 anos");
} else if (idade_pessoa < 18) {
    console.log("Adolescente");
} else if (idade_pessoa < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

console.log("\n--- Exemplo 2: Validar tipo de usuário ---");
const tipoUsuario = "admin";

if (tipoUsuario === "admin") {
    console.log("Acesso total ao sistema");
} else if (tipoUsuario === "moderador") {
    console.log("Acesso moderado");
} else if (tipoUsuario === "usuario") {
    console.log("Acesso limitado");
} else {
    console.log("Tipo inválido");
}

console.log("\n--- Exemplo 3: Validar múltiplas condições ---");
const saldo = 1000;
const valor = 500;
const ativado = true;

if (ativado && saldo >= valor) {
    console.log("Transação permitida");
} else if (!ativado) {
    console.log("Conta desativada");
} else if (saldo < valor) {
    console.log("Saldo insuficiente");
}

/**
 * RESUMO FINAL:
 * 
 * ✅ Use === para comparações (nunca ==)
 * ✅ Use !== para desigualdade estrita
 * ✅ Use ! para negação
 * ✅ Use && para múltiplas condições (todas verdadeiras)
 * ✅ Use || para múltiplas condições (uma verdadeira)
 * ✅ Use prefixos descritivos (is, has, can, should)
 * ✅ Mantenha condições claras e legíveis
 * 
 * ❌ EVITE nested ifs profundos (muitos níveis)
 * ❌ EVITE condições muito complexas
 * 
 * PRÓXIMO PASSO:
 * - Switch/case para muitas condições
 * - Operador ternário (?) para condições simples
 */