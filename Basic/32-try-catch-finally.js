try{
    //É executado quando não há erros
    console.log(naoExisto)
}catch(e){
    //É executado quando há erros
    console.log(`Tratando erro ${e}`)
}finally{
    // Sempre executado
    console.log('Finally sempre executado.')
}