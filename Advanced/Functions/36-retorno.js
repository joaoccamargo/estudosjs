// return
// retorna um valor
// termina a função

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Jose', 'Silva')

console.log(p1)
console.log(p1.nome, p1.sobrenome)