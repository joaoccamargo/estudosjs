function meuImc() {
    
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    function recebeForm(evento){
        evento.preventDefault();
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        const calcPesoAltura = (peso.value / altura.value);
        console.log(calcPesoAltura);


        if(calcPesoAltura <= 18.5){       
            resultado.innerHTML = `<p style="background-color:red;">Você está abaixo do peso.</p>`;
        }else if(calcPesoAltura >= 18.5 && calcPesoAltura <= 24.9){
            resultado.innerHTML = `<p style="background-color:green;">Você está com peso normal.</p>`;
        }else if(calcPesoAltura >= 25 && calcPesoAltura <= 29.9){
            resultado.innerHTML = `<p style="background-color:yellow;">Você está com Sobrepeso</p>`;
        }else if(calcPesoAltura >= 30 && calcPesoAltura <= 34.9){
            resultado.innerHTML = `<p style="background-color:red;">Você está com Obesidade grau 1</p>`;
        }else if(calcPesoAltura >= 35 && calcPesoAltura <= 39.9){
            resultado.innerHTML = `<p style="background-color:red;">Você está com Obesidade grau 2</p>`;
        }else if(calcPesoAltura > 40){
            resultado.innerHTML = `<p style="background-color:red;">Você está com Obesidade grau 3</p>`;
        }
       
    }

   form.addEventListener('submit', recebeForm);
   
   
    
}

meuImc();