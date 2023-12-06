// Função CallBack
function rand(min = 1000, max = 3000){
   const num = Math.random() * (max-min) + min;
   return Math.floor(num);
}

function funcaoUm(callback){
   setTimeout(function(){
      console.log('F1');
      if(callback) callback();
   }, rand());
}

function funcaoDois(callback){
   setTimeout(function(){
      console.log('F2');
      if(callback) callback();
   }, rand());
}
function funcaoTres(callback){
   setTimeout(function(){
      console.log('F3')
      if(callback) callback();
   }, rand());
}

function f1Callback(){
   funcaoDois(f2Callback)
}

function f2Callback(){
   funcaoTres(f3Callback);
}

function f3Callback(){
   console.log('Olá callback');
}