// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, ,tres, ...resto] = numeros; // ...rest operator
// console.log(um, tres);
// console.log(resto);


// Cada lista possui indice. 0, 1, 2 exemplo.
//
const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const [lista1, lista2, lista3] = numeros;

console.log(lista2[0]) // exemplo acessar numero 4.