
function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value == 0 || fano.value > ano){
        res.innerHTML = "erro"
    }else{
        let fsex = document.getElementsByName('sexo')
        let idade = ano - Number(fano.value)
        let genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        }else{
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    }
}