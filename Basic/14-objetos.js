const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} tenho ${this.idade} anos`)
    },

    incrementaIdade(){
        this.idade++
        console.log(`${this.idade} é a minha idade nova`)
    }


};


pessoa1.fala();
pessoa1.incrementaIdade();