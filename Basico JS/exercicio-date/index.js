myFunctionDate = (diaSemana) => {
    let diaSemanaTexto;
  
    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sextou';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabádou';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
          
    };
}

myFunctionDateTwo = (nomeMes) => {
    let diaMesTexto;

    switch (nomeMes){
        case 0:
            diaMesTexto = 'Janeiro';
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Fevereiro';
            return diaMesTexto;
        case 2:
            diaMesTexto = 'Março';
            return diaMesTexto;
        case 3:
            diaMesTexto = 'Quarta';
            return diaMesTexto;
        case 4:
            diaMesTexto = 'Abril';
            return diaMesTexto;
        case 5:
            diaMesTexto = 'Maio';
            return diaMesTexto;
        case 6:
            diaMesTexto = 'Junho';
            return diaMesTexto;

        case 7:
            diaMesTexto = 'Julho';
            return diaMesTexto;

        case 8:
            diaMesTexto = 'Agosto';
            return diaMesTexto;
        case 9:
            diaMesTexto = 'Setembro';
            return diaMesTexto;
        case 10:
            diaMesTexto = 'Outubro';
            return diaMesTexto;
        case 11:
            diaMesTexto = 'Novembro';
            return diaMesTexto;
        case 12:
            diaMesTexto = 'Dezembro';
            return diaMesTexto;
        default:
            diaMesTexto = '';
            return diaMesTexto;
    }

}



const data = new Date();
const diaSemana = data.getDay();
const diaHoje = data.getDate();
const nomeMes = data.getMonth();
const anoAtual = data.getFullYear();

const horaAtual = data.getHours();
const segAtual = data.getMinutes();

const diaSemanaTexto = myFunctionDate(diaSemana);
const diaMesTexto = myFunctionDateTwo(nomeMes);

console.log(`Hoje é ${diaSemanaTexto}, ${diaHoje} de ${diaMesTexto} de ${anoAtual} e a hora é ${horaAtual}:${segAtual}`);


document.getElementById("demo").innerHTML = `Hoje é ${diaSemanaTexto}, ${diaHoje} de ${diaMesTexto} de ${anoAtual} e a hora é ${horaAtual}:${segAtual}`;

