//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2,elem3,....)
const removidos = `removeu `+ nomes.splice(3, 1, 'Jose')
console.log(nomes, removidos)
nomes.splice(nomes.length, 0, 'Joaquin', 'Barbara', 'Luiz')
console.log(nomes)