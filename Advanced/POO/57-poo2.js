class Carro {

    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerarCarro(){
        if(this.velocidade >= 100) return;
        this.velocidade++;
    }
    
    pararCarro(){
        if(this.velocidade <= 0) return;
        this.velocidade--;
    }

}

const carro1 = new Carro('Fusca');

for (let i = 0; i < 200; i++) {
    carro1.acelerarCarro();
}

console.log(carro1)