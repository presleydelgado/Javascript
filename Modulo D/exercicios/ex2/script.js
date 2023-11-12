
function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    let img = document.getElementById('img')

    if (fano.value == 0 || fano.value > ano){
        res.innerHTML = "erro"
    }else {
        let fsex = document.getElementsByName('sexo')
        let idade = ano - Number(fano.value)
        let genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            switch (true){
                case idade <= 14 :
                    img.src = "imagens/m1.gif"
                    break;
                case idade >= 30 :
                    img.src = "imagens/m2.png"
                    break;
                case idade > 50 :
                    img.src = "imagens/m4.jpg"
                break;
            }
            img.style.display = 'block';
        } else if (fsex[1].checked){
            genero = 'Mulher'
            switch (true){
                case idade <= 14 :
                    img.src = "imagens/f1.jpg"
                    break;
                case idade >= 30 :
                    img.src = "imagens/f3.jpg"
                    break;
                case idade > 50 :
                    img.src = "imagens/f4.gif"
                break;
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    }
}