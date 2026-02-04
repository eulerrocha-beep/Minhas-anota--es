class pessoa {
    nome;
    idade;
    profissao;
    cidade;

    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, trabalho como ${this.profissao} e moro em ${this.cidade}.`);
    }
}


const Vitor = new pessoa();
Vitor.nome = "Vitor";
Vitor.idade = 21;
Vitor.profissao = "Desenvolvedor";
Vitor.cidade = "São Paulo";

const Ana = new pessoa();
Ana.nome = "Ana";
Ana.idade = 25;
Ana.profissao = "Designer";
Ana.cidade = "Rio de Janeiro";

Vitor.descrever();
Ana.descrever();