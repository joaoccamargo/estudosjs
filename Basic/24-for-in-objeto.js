const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 35
};

for (let indice in pessoa){
    console.log(indice, pessoa[indice])
}