// Escopo Global


    //Escopo Local
    function retornaFuncao() {
        const nome = 'Jose'
        return function(){
            return nome;
        }
    }

    const funcao = retornaFuncao();
    console.log(funcao)