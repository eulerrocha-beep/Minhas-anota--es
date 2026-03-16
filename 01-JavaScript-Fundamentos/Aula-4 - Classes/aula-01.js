/**
 * AULA: Classes em JavaScript
 * 
 * Classes são templates para criar objetos reutilizáveis.
 * Encapsulam propriedades (dados) e métodos (ações).
 * 
 * Introduzidas no ES6 (2015) como alternativa ao prototypes.
 */

/* ==========================================
   ESTRUTURA BÁSICA DE UMA CLASSE
   ========================================== */

class Pessoa {
  // Propriedades (atributos)
  nome;
  idade;
  profissao;
  cidade;
  
  // Construtor (executado ao criar nova instância)
  constructor(nome, idade, profissao, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.cidade = cidade;
  }
  
  // Método (função dentro da classe)
  descrever() {
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos, trabalho como ${this.profissao} e moro em ${this.cidade}.`;
  }
}

/* ==========================================
   CRIANDO INSTÂNCIAS (OBJETOS)
   ========================================== */

// ANTES (sem usar constructor - não recomendado):
/*
const Vitor = new Pessoa();
Vitor.nome = "Vitor";
Vitor.idade = 21;
Vitor.profissao = "Desenvolvedor";
Vitor.cidade = "São Paulo";
*/

// DEPOIS (com constructor - recomendado):
const vitor = new Pessoa("Vitor", 21, "Desenvolvedor", "São Paulo");
const ana = new Pessoa("Ana", 25, "Designer", "Rio de Janeiro");
const carlos = new Pessoa("Carlos", 28, "Product Manager", "Belo Horizonte");

// Acessar propriedades
console.log(vitor.nome);        // Vitor
console.log(ana.profissao);     // Designer
console.log(carlos.cidade);     // Belo Horizonte

// Chamar métodos
console.log(vitor.descrever());   // Meu nome é Vitor, tenho 21 anos...
console.log(ana.descrever());     // Meu nome é Ana, tenho 25 anos...
console.log(carlos.descrever());  // Meu nome é Carlos, tenho 28 anos...


/* ==========================================
   PROPRIEDADES E MÉTODOS
   ========================================== */

class Carro {
  // Propriedades
  marca;
  modelo;
  ano;
  velocidade = 0;  // Valor padrão
  
  // Construtor
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  
  // Métodos
  acelerar() {
    if (this.velocidade < 200) {
      this.velocidade += 20;
    }
    return `Acelerando para ${this.velocidade} km/h`;
  }
  
  frear() {
    if (this.velocidade > 0) {
      this.velocidade -= 20;
    }
    return `Freando para ${this.velocidade} km/h`;
  }
  
  parar() {
    this.velocidade = 0;
    return "Carro parou!";
  }
  
  info() {
    return `${this.marca} ${this.modelo} (${this.ano}) - Velocidade: ${this.velocidade} km/h`;
  }
}

// Usando a classe
const meuCarro = new Carro("Toyota", "Corolla", 2023);
console.log(meuCarro.info());       // Toyota Corolla (2023) - Velocidade: 0 km/h
console.log(meuCarro.acelerar());   // Acelerando para 20 km/h
console.log(meuCarro.acelerar());   // Acelerando para 40 km/h
console.log(meuCarro.frear());      // Freando para 20 km/h
console.log(meuCarro.parar());      // Carro parou!
console.log(meuCarro.info());       // Toyota Corolla (2023) - Velocidade: 0 km/h


/* ==========================================
   CONSTRUTOR (constructor)
   ========================================== 
   
   Método especial executado automaticamente
   quando você cria uma nova instância com 'new'
   
   Serve para inicializar propriedades
*/

class Livro {
  constructor(titulo, autor, ano, preco) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.preco = preco;
    this.lido = false;  // Propriedade iniciada automaticamente
  }
  
  marcarComoLido() {
    this.lido = true;
  }
  
  descontoFesta(percentual) {
    return this.preco - (this.preco * percentual / 100);
  }
  
  info() {
    const status = this.lido ? "Lido" : "Não lido";
    return `${this.titulo} por ${this.autor} (${this.ano}) - ${status}`;
  }
}

const livro1 = new Livro("1984", "George Orwell", 1949, 45.00);
const livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, 120.00);

console.log(livro1.info());  // 1984 por George Orwell (1949) - Não lido
livro1.marcarComoLido();
console.log(livro1.info());  // 1984 por George Orwell (1949) - Lido

console.log(livro2.descontoFesta(20));  // 96 (20% de desconto)


/* ==========================================
   THIS (referência ao objeto)
   ========================================== 
   
   'this' refere-se ao objeto atual (instância)
   Permite acessar propriedades e métodos do próprio objeto
*/

class Aluno {
  constructor(nome, nota1, nota2, nota3) {
    this.nome = nome;
    this.notas = [nota1, nota2, nota3];
  }
  
  calcularMedia() {
    const soma = this.notas.reduce((acc, n) => acc + n, 0);
    return soma / this.notas.length;  // 'this.notas' refere-se ao objeto
  }
  
  passou() {
    // Usa 'this' para acessar método da própria classe
    const media = this.calcularMedia();
    return media >= 7;
  }
  
  relatorio() {
    const media = this.calcularMedia().toFixed(2);
    const resultado = this.passou() ? "APROVADO" : "REPROVADO";
    return `${this.nome} - Média: ${media} - ${resultado}`;
  }
}

const aluno1 = new Aluno("João", 8, 9, 7);
const aluno2 = new Aluno("Maria", 6, 5, 4);

console.log(aluno1.calcularMedia());  // 8
console.log(aluno1.relatorio());      // João - Média: 8.00 - APROVADO

console.log(aluno2.calcularMedia());  // 5
console.log(aluno2.relatorio());      // Maria - Média: 5.00 - REPROVADO


/* ==========================================
   EXEMPLOS PRÁTICOS
   ========================================== */

// Exemplo 1: Conta Bancária
class ContaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.historico = [];
  }
  
  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      this.historico.push(`Depósito de R$ ${valor}`);
      return `Depósito realizado. Saldo: R$ ${this.saldo}`;
    }
    return "Valor inválido!";
  }
  
  sacar(valor) {
    if (valor > this.saldo) {
      return "Saldo insuficiente!";
    }
    if (valor > 0) {
      this.saldo -= valor;
      this.historico.push(`Saque de R$ ${valor}`);
      return `Saque realizado. Saldo: R$ ${this.saldo}`;
    }
    return "Valor inválido!";
  }
  
  extratoCompleto() {
    return `\n--- Extrato de ${this.titular} ---
Saldo: R$ ${this.saldo}
Histórico: ${this.historico.join(", ") || "Vazio"}`;
  }
}

const minhaConta = new ContaBancaria("João Silva", 1000);
console.log(minhaConta.depositar(500));     // Depósito realizado. Saldo: 1500
console.log(minhaConta.sacar(200));         // Saque realizado. Saldo: 1300
console.log(minhaConta.extratoCompleto());  // Extrato com histórico

// Exemplo 2: Produto de Loja
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
  
  vender(quantidade) {
    if (quantidade > this.estoque) {
      return `Estoque insuficiente! Disponível: ${this.estoque}`;
    }
    this.estoque -= quantidade;
    const total = this.preco * quantidade;
    return `Venda realizada! Total: R$ ${total} | Estoque restante: ${this.estoque}`;
  }
  
  repor(quantidade) {
    this.estoque += quantidade;
    return `Estoque reposto. Total: ${this.estoque}`;
  }
  
  preco() {
    return `${this.nome} - R$ ${this.preco}`;
  }
}

const produto1 = new Produto("Notebook", 3000, 5);
console.log(produto1.preço());        // Notebook - R$ 3000
console.log(produto1.vender(2));      // Venda realizada! Total: 6000 | Estoque: 3
console.log(produto1.vender(10));     // Estoque insuficiente!
console.log(produto1.repor(10));      // Estoque reposto. Total: 13


/* ==========================================
   BOAS PRÁTICAS
   ========================================== */

/*
✅ FAÇA:
- Use nomes descritivos (Pessoa, Carro, Livro)
- Use PascalCase para nomes de classes (MinhaClasse)
- Inicialize propriedades no constructor
- Use métodos para ações e operações
- Mantenha classes focadas em uma responsabilidade

❌ EVITE:
- Classes com nomes genéricos (Dados, Coisa)
- Deixar propriedades sem inicialização
- Métodos muito longos (quebra em menores)
- Classes que fazem muitas coisas diferentes
- Modificar propriedades diretamente sem método

EXEMPLO DE BOA PRÁTICA:

class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
    this.ativo = true;
  }
  
  desativar() {
    this.ativo = false;
  }
  
  ativar() {
    this.ativo = true;
  }
}
*/


/**
 * RESUMO FINAL:
 * 
 * O QUE SÃO CLASSES:
 * ✅ Templates para criar objetos
 * ✅ Encapsulam propriedades e métodos
 * ✅ Permitem reutilização de código
 * ✅ Deixam código mais organizado
 * 
 * COMPONENTES:
 * - Propriedades: dados do objeto
 * - Constructor: inicializa o objeto
 * - Métodos: ações que o objeto pode fazer
 * - this: referência ao objeto atual
 * 
 * SINTAXE:
 * class NomeDaClasse {
 *   propriedade;
 *   constructor(parametros) { }
 *   metodo() { }
 * }
 * 
 * CRIAR INSTÂNCIA:
 * const objeto = new NomeDaClasse(argumentos);
 * 
 * ACESSAR PROPRIEDADES:
 * objeto.propriedade
 * 
 * CHAMAR MÉTODOS:
 * objeto.metodo()
 * 
 * PRÓXIMOS TÓPICOS:
 * → Herança (extends)
 * → Polimorfismo
 * → Encapsulamento (#propriedades privadas)
 * → Métodos estáticos (static)
 */