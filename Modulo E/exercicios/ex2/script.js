function gerar(){
    let numero = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');
    let tabuada = document.getElementById('tab');
    let y = 0;

    resultado.innerHTML = ' ';

    for(numero; numero <= 10; numero++)
    {      
        for(y; y <= 10; y++)
        {
            //resultado.innerHTML += `${numero} X ${y} = ${numero*y} <br>`
            let item = document.createElement('option')
            item.text = `${numero} X ${y} = ${numero*y}`
            tabuada.appendChild(item)
        }
        
        if(numero === "")
        {
            alert('Valor invalido! Por favor,digite um número')
            resultado.innerHTML = ' ';
            break;
        }
    }
}