// IIFE -> Immediately Invoked function expression

(function(idade, peso, altura){
    const sobrenome = 'Silva';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Jose'))
    }

    falaNome()
    console.log(idade, peso, altura)
})(30, 80, 1.80)