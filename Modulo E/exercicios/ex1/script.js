function contar(){
    //alert('funcionou')
    let inicio = document.getElementById('inicio').value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    let soma;
    
    
   
    //tem que pegar o inicio , comparar com o valor final
    //pegar o inicio e somar com o passo até chegar no valor final...

/*    if(inicio < fim){
        do {
            inicio = (inicio + passo)
            inicio++
            
        }while(inicio == fim)
        alert(`${inicio}`)
    }
*/
    if(inicio < fim){
        do{
            soma = inicio+passo
            inicio++
            alert(`${inicio}`)
        }while(inicio < fim)
    }

}