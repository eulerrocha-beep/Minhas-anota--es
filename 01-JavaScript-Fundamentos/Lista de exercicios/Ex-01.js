/* Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media
e a sua classificação conforme a tabela abaixo.

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação: 
- Media menor que 5, reprovção;
- Media entre 5 e 7, recuperação;
- Media acima de 7, passou de semestre 

*/


let nota1 = 3;
let nota2 = 19; 
let nota3 = 6;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5 ) {
    console.log("Aluno reprovado");
} else if (media >= 5 && media <= 7) {
    console.log("Aluno de Recuperação");
} else {
    console.log("Aluno passou de semestre");
}

console.log(media)