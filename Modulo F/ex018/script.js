    let numero = document.getElementById('numeroEntre'); //input
    let resultado = document.getElementById('resultado1');
    let a = document.getElementById('tabelinha'); //lista
    let valores = []; //array
    

    function adicionar(){
    //let resultado = document.getElementById('tabelinha').value;

    let n = Number(numero.value)

    
    //Erros VVVVVVVV

    if(n <0 || n > 100)
    {
        window.alert("Valor invalido !")
        
    }else if (n == '')
    {
        window.alert("Campo deixado em branco,por favor digite um valor !")
        return;
    }else if (valores.indexOf(n)!== -1) //não sei o porque mas isso só funciona se for true,se for false ele não funciona
    {
        window.alert(`O valor ${n} Já existe na lista`)
    }
    else 
    {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tabelinha.appendChild(item)
        
    }
}

function finalizar(){
    
    
    resultado1.innerHTML = (`Ao todo temos ${a.length} números cadastrados !`);

    //Quantidade de números AAA
     
}