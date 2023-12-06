// Filter

// retorne os números maiores que 10
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
//const numerosFiltrados = numeros.filter()

/*
Retone as pessoas que tem o nome com 5 letras ou mais
Retorne as pessoas com mais de 50 anos
Retone as pessoas cujo nome termina com a
*/
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];
/*
pessoas.filter((dado) => {
    //console.log(dado.nome)
    if(dado.nome.length >= 5){
       //console.log('Nomes com 5 letras ou mais', dado)
    }

    if(dado.idade > 50){
        //console.log('mais de 50 anos', dado)
    }

    if(dado.nome.endsWith('a')){
        console.log(dado)
    }
})
*/

const pessoasComNomeGrande = pessoas.filter(dado => dado.nome.length >= 5);
const pessoasComMaisDeCinquenta = pessoas.filter(dado => dado.idade > 50);
const pessoasComFinalA = pessoas.filter(dado => dado.nome.endsWith('a'));

