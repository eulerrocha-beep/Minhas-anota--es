const pessoa = {
    nome: "Vitor",
    idade: 21,
    profissao: "Desenvolvedor",
    cidade: "São Paulo",

    descrever: function() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, trabalho como ${this.profissao} e moro em ${this.cidade}.`);
    }
};

/* Sintaxe Mais dinâmica  atráves de uma string eu acesso o atributo */
const atributo = "idade";
console.log(pessoa[atributo]);