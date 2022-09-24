/* 
Escreva uma função que recebe um número e
retorne o seguinte:
Numero é divisivel por 3 = Fizz
Numero é divisivel por 5 = Buzz
Numero é divisivel por 3 e 5 = FizzBuzz
*/

// function myFunc(numero, divisor) {
//     return numero % divisor == 0;
// }
// console.log(myFunc(3, 3))

//const fizzBuzz = (numero, divisor) => numero % divisor == 0 ? `Fizz ${true}` : `Numero não é divisivel ${false}`

function fizzBuzz (numero){
    
    if (numero % 3 == 0 && numero % 5 == 0){
        console.log('FizzBuzz')
    }else if(numero % 5 == 0){
        console.log('Buzz')
    }else if(numero % 3 == 0){
        console.log('Fizz')
    }
}

console.log(fizzBuzz(15))

