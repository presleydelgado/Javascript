
function verificar(){
    window.alert("FUNCIONOU")
    let idade = document.getElementById('anonasc')
    let masc = document.getElementById('masculino')
    let fem = document.getElementById('feminino')
    let res = document.getElementById('resultado')

    if(masc == masculino){
        res.innerHTML = `aaaa ${masc}`    
    }else if (fem){
        res.innerHTML = `aaaa ${fem}`
    }
}