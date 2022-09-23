// ESCREVA UMA FUNÇÃO QUE RECEBE 2 NUMEROS E RETORNE O MAIOR DELES

function myFunc(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(myFunc(1, 5))

//Arrow function função refactored
const max = (num1, num2) =>  num1 > num2 ? num1 : num2
console.log(max(1, 5))