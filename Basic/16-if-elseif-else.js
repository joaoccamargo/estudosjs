/* 
Entre 0 - 5 - Boa Madrugada
Entre 6 - 12 - Bom dia
Entre 13 - 17 - Boa tarde
Entre 18 - 24 - Boa noite
*/

// If pode ser usado sozinho
// else if não pode ser usado sozinho
// pode ter varios else if
// pode ter um else


const hora = 23;

if (hora >= 0 && hora <= 5){
    console.log('Boa Madrugada!')
}else if(hora >= 6 && hora <= 12){
    console.log('Bom Dia!')
}else if(hora >= 13 && hora <= 17){
    console.log('Boa Tarde!')
}else if(hora >= 18 && hora <= 23){
    console.log('Boa Noite!')
}else{
    console.log('O relógio está em conflito.')
}