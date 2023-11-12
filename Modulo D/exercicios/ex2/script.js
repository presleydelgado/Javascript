
function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value == 0 || fano.value > ano){
        window.alert("erro")
    }else{
        window.alert('tudo certo')
    }
}