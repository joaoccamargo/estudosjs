class Pessoa {

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }
}

let pessoa1 = new Pessoa();
pessoa1.nome = 'Jose'
pessoa1.sobrenome = 'Silva'
console.log(pessoa1.getNome());
pessoa1.setNome('Maria')
console.log(pessoa1.getNome());