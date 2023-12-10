    let numero = document.getElementById('numeroEntre'); //input
    let resultado = document.getElementById('resultado1');
    let a = document.getElementById('tabelinha');
    let valores = [];

    function adicionar(){
    //let resultado = document.getElementById('tabelinha').value;

    let n = Number(numero.value)
    
    //Erros VVVVVVVV

    if(n < 0 || n > 100)
    {
        window.alert("Valor invalido !")
    }else if (n == '')
    {
        window.alert("Campo deixado em branco,por favor digite um valor !")
    }else if (n == a)
    {
        window.alert("Valor repetido")
    }
    else 
    {
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tabelinha.appendChild(item)
        
    }
}

function finalizar(){
    
    
    resultado1.innerHTML = (`Ao todo temos ${a.length} números cadastrados !`);

    //Quantidade de números AAA
    
    
    valores.sort()

    for(let pos=0; pos < valores.length; pos++)
    {
        resultado2.innerHTML = (`${pos}, ${valores[pos]}`)

    }
   
}