// Factory Functions
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        fala(assunto){
            return `${this.nome} está ${assunto}`
        },
        altura,
        peso,
        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Luiz', 'Silva', 1.8, 80)
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 45)
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc)
console.log(p2.fala('falando sobre JS'))
console.log(p2.imc)