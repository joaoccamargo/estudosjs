// arguments sustenta todos os argumentos enviados pela função sem argumento.
function funcao(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento
    }
    console.log(total)
}

funcao(1,2,3,4,5,6,7)


function fobjota({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
/*
let obj = {
    nome: 'Jose',
    sobrenome: 'silva',
    idade: 31
}
*/
fobjota({nome: 'Jose', sobrenome: 'silva', idade: 31})

// ...Rest Operator
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta('+', 1, 20, 30, 40, 50)