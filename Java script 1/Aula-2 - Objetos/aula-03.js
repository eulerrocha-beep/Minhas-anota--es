const pessoa = {
    nome: "Vitor",
    idade: 21,
    profissao: "Desenvolvedor",
    cidade: "São Paulo",

    descrever: function() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, trabalho como ${this.profissao} e moro em ${this.cidade}.`);
    }
};

pessoa.idade = 24;
pessoa.cidade = "Rio de Janeiro";

/*delete pessoa.profissao;*/

console.log(pessoa);

pessoa.descrever();
