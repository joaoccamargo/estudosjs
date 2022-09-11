const nomes = ['João Silva', 'Ghoul', 'Chin'];
console.log('#####for#classic####')
for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

console.log('#####for#in####')
for (let indice in nomes){
    console.log(indice, nomes[indice])
}
console.log('####for#of#####')
for (let valor of nomes){
    console.log(valor);
}
console.log('####for#Each#####')

nomes.forEach(function(valor, indice){
    console.log(valor, indice)
})