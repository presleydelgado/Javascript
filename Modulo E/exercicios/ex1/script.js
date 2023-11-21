function contar(){
    //alert('funcionou')
    let inicio = document.getElementById('inicio').valueAsNumber;
    let fim = document.getElementById('fim').valueAsNumber;
    let passo = document.getElementById('passo').valueAsNumber;   //O segredo tava em por .valueasnumber,se não ele não soma os valores
   
    

    while(inicio <= fim){
        if(inicio + passo >= fim){
            alert(`Fim da operação !`)
            break;
        }
        inicio += passo;
        alert(`${inicio}`)
        
        }
        }
    
    

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

/*
    if(inicio < fim){
        do{
            soma = (inicio + passo)
            conta = (soma + inicio)
            conta++
            
            alert(`${conta}`)
        }while(conta < fim)
    }

}

*/

