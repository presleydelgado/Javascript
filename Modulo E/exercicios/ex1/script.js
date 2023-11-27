function contar(){
    //alert('funcionou')
    let inicio = document.getElementById('inicio').valueAsNumber;
    let fim = document.getElementById('fim').valueAsNumber;
    let passo = document.getElementById('passo').valueAsNumber;   //O segredo tava em por .valueasnumber,se não ele não soma os valores
    let resultado = document.getElementById('resultado');
    let caixa = document.getElementById('caixafundobranco');
    let resposta = [];      
    
    while(inicio <= fim)
    {
        resposta.push(inicio);

        if(inicio + passo > fim)
        {
            break;
        }else if(passo == 0)
        {
            passo = 1
            alert("PASSO INVALIDO ! \nCONSIDERANDO PASSO 1 !!!");
        }else if(resposta.length > 9)
        {
            caixa.style.height = '300px';
        }

        /*if(inicio == '')
        {
            alert("Campo vazio!");
            break;
            
        }   // não sei porque não funciona... que coisa
        */
        
        inicio = inicio += passo;
    }
        resultado.innerHTML = resposta.join(' 👉 ');
}
        
         
       //Forma reduzida do código apenas para o loop...
       /*
            inicio = +inicio;   //se usa o + no começo para converter para número,o js caga nesse quesito...
            passo = +passo;
            fim = +fim;
            

            for(let c = inicio;c <= fim; c += passo)
            {
                resultado.innerHTML += `${c}👉`;
                
            }
}
    */
    


    //Isso aqui também funciona...mas algo não está certo
    //VVVVV
    /*
    do
    {
        c = inicio += passo;
        resultado.innerHTML += ` - ${c}`;

    }while(inicio <= fim)
    */
        
        
    
    

    
    

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

//----------------------------------


    /*
    do
    {
        a += c;
        resultado += a + " ";
    }while(a <= b);
    resultado.innerHTML = `${resultado}`;
    */  

    /*


    do
    {
        resultado = inicio += passo;
        inicio++;
        
    }while(inicio < fim);
    resultado.innerHTML = `${resultado}`

*/



    /*
    for(inicio;inicio <= fim;inicio++)
    {
        inicio = inicio += passo;
        resultado.innerHTML += `a`
    }
    resultado.innerHTML += `${inicio}`
    */