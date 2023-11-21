function contar(){
    //alert('funcionou')
    let inicio = document.getElementById('inicio').valueAsNumber;
    let fim = document.getElementById('fim').valueAsNumber;
    let passo = document.getElementById('passo').valueAsNumber;   //O segredo tava em por .valueasnumber,se não ele não soma os valores
    let resultado = document.getElementById('resultado');
    let caixa = document.getElementById('caixafundobranco');
    let resposta = [];
   
    while(inicio <= fim){
        resposta.push(inicio);
        if(inicio + passo >= fim){
            alert(`Fim da operação !`)
            break;
        }
        inicio = inicio += passo;
        if(resposta.length > 9){
            caixa.style.height = '300px';
            }
            }
            resultado.innerHTML = resposta.join(' 👉 ');
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

