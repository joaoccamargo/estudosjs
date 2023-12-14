class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(this.nome + ' já está ligado');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado')
            return;
        }
        this.ligado = false;
    }

}

class Smartphone extends DispositivoEletronico {

    constructor(nome, color){
        super(nome)
        this.color = color;
    }

    setColor(nome){
        this.color = nome;
    }

    getColor(){
        return `${this.nome} Cor: ${this.color}`
    }

}

const cel = new Smartphone('iPhone');
cel.color = 'Blue'
console.log(cel.getColor())