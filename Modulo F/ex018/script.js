const tabela = [tabelinha];

function adicionar(){
    let numero = document.getElementById('numeroEntre');
    //let resultado = document.getElementById('tabelinha').value;

    let n = Number(numero.value)
    
    //Erros VVVVVVVV

    if(n < 0 || n > 100)
    {
        window.alert("Valor invalido !")
    }else if (n == '')
    {
        window.alert("Campo deixado em branco,por favor digite um valor !")
    }
    else
    {
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tabelinha.appendChild(item)
        
    }
}

function finalizar(){
    let resultado = document.getElementById('resultado');
    let a = document.getElementById('tabelinha').length;
    let maior = tabelinha.sort()
    
    resultado.innerHTML = (`Ao todo temos ${a} números cadastrados !`);
    resultado.innerHTML = (`O maior valor informado foi ${maior}`)
}