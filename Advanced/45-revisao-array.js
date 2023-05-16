//                0          1        2
const nomes = ['Eduardo', 'Maria', 'Joana']
const nome = 'Jose Silva'
console.log(nome.split(' '))
const novo = [...nomes]
nomes[2] = 'João';
delete nomes[2]

novo.pop();
//nomes.slice(1, -1)
console.log(nomes)