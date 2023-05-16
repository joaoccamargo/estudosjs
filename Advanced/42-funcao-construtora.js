// Função construtora -> Objetos
// Função fabrica -> Objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome){

    // Privados
    const ID = 1234567;
    const metodoInterno = function(){
    }

    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(`${this.nome} esse é a pessoa`)
    }
}

const p1 = new Pessoa('Jose', 'Silva')
const p2 = new Pessoa('Jao', 'Dorival')

p1.metodoInterno()