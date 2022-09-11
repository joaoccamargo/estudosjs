// Constantes com const
// Não pode mudar um valor de uma constante
const nome = 'João';

console.log(nome);

//nome = 'Silva';

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;

console.log('Resultado é ', resultado);

//Exercicio
const primeiroNome = 'Luiz';
const sobreNome = 'Otávio Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(primeiroNome, sobreNome, 'tem', idade, 'anos, pesa', peso, 'kg', 'tem', altura, 'e seu IMC é de', imc);
console.log(primeiroNome, sobreNome, 'nasceu em', anoNascimento);

//TEMPLATE STRING FORMA MAIS ATUAL
console.log(`${primeiroNome} ${sobreNome} tem ${idade} anos pesa ${peso} kg tem ${altura} e seu IMC é de ${imc}`);
