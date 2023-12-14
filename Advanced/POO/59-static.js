class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Metodos Instancia
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    // Metodo estático
    static trocarPilha(){
        console.log('trocando pilha')
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocarPilha();