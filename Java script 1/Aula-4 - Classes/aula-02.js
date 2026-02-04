class pessoa {
    nome;
    idade;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, trabalho como ${this.profissao} e moro em ${this.cidade}.`);
    }
}


const Vitor = new pessoa("Vitor", 21);

const Ana = new pessoa("Ana", 25);


console.log(Vitor);