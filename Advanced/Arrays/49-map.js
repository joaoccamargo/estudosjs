const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobrandoValores = numeros.map(dado => {
    return dado * 2;
})

console.log(dobrandoValores)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const consultaArrayObject = pessoas.map((dado, indice) => {
    dado.id = indice;
    return dado;
})
console.log(consultaArrayObject);