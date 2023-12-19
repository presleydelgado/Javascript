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
        window.alert("Valor fora do alcance do programa ! \nPor favor digite outro valor !")
        
    }else if (numero.value.length == 0)
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
    let maior = Math.max.apply(null, valores);
    let menor = Math.min.apply(null, valores);
    let soma = 0
    for(i = 0; i < valores.length; i++)
    {
        soma += valores[i];
    }

    let media = (soma/i)

    resultado1.innerHTML = (`Ao todo temos <strong>${a.length}</strong> números cadastrados !`);
    resultado2.innerHTML = (`O <strong>maior</strong> valor informado foi <strong>${maior}</strong>`);
    resultado3.innerHTML = (`O <strong>menor</strong> valor informado foi <strong>${menor}</strong>`);
    resultado4.innerHTML = (`A <strong>soma</strong> de todos os números é igual a : <strong>${soma}</strong>`)
    resultado5.innerHTML = (`A <strong>média</strong> dos valores somados é igual a : <strong>${media}</strong>`)
}