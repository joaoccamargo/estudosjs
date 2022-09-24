/*
try{
console.log(naoExisto);
}catch(error){
    console.log('Error Não existe!');
}
*/

function soma(x, y){
    if (typeof x !== 'number' || typeof y != 'number'){
        throw('x e y precisam ser numeros');
    }

    return x + y;
}

try{
    console.log(soma(1, 2))
    console.log(soma('1', 1));
}catch(error){
    //console.log(error) - não exibir para usuario final, pode ser usado mais no
}