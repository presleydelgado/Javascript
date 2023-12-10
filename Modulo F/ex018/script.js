function adicionar(){
    let numero = document.getElementById('numeroEntre');
    //let resultado = document.getElementById('tabelinha').value;

    let n = Number(numero.value)

    let item = document.createElement('option')
    item.text = `Valor ${n} adicionado`
    tabelinha.appendChild(item)
    
}