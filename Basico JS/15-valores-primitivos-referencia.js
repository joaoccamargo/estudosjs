/*  
Primitivos(imutaveis) - string, number, boolean,undefined, null (bigint, symbol) - valores são copiados

Referencia (mutável) - array, function, object - passados por referencia.


*/


const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
const b = a;

b.nome = 'João';

console.log(a);
console.log(b);