// Declaração de função (function hoisting)
falaOi();

function falaOi(){
    console.log('Oi')
}

// First-class objects(Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou uma constante recebendo uma função')
}

souUmDado();

function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {console.log('Sou uma arrow function')}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...')
    }
}
obj.falar();