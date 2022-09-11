// 
const pessoa = {
    nome: 'Joao',
    sobrenome: 'Silva',
    idade:30,
    endereco:{
        rua:'Av Brasil',
        numero: 320
    }
};

const { nome, ...resto } = pessoa
console.log(pessoa.endereco.numero)
console.log(resto)