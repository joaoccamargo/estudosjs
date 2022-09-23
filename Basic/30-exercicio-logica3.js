/* 
Escreva uma função que recebe um número e
retorne o seguinte:
Numero é divisivel por 3 = Fizz
Numero é divisivel por 5 = Buzz
Numero é divisivel por 3 e 5 = FizzBuzz
Numero Não é divisivel pro 3 e 5 = Retorna o proprio numero
Chegar se o numero é realmente um numero
Use a função com numeros de 0 a 100
*/

// function myFunc(numero, divisor) {
//     return numero % divisor == 0;
// }
// console.log(myFunc(3, 3))

//const fizzBuzz = (numero, divisor) => numero % divisor == 0 ? `Fizz ${true}` : `Numero não é divisivel ${false}`

function fizzBuzz (numero, divisor){
    
    if (numero % divisor == 0){
        console.log('O numero é divisivel')
    }else{
        console.log('O numero não é divisivel')
    }
}


console.log()

