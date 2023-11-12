
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
                case idade <= 12 :
                    img.src = "imagens/m1.png"
                    break;
                case idade <= 25 :
                    img.src = "imagens/m2.png"
                    break;
                case idade >= 25 && idade <= 50:
                    img.src = "imagens/m3.png"
                    break;
                    case idade > 50 && idade < 100 :
                        img.src = "imagens/m4.png"
                    break;
                    case idade > 100 :
                        img.src = "imagens/f.png"
                    break;
            }
            img.style.display = 'block';
        } else if (fsex[1].checked){
            genero = 'Mulher'
            switch (true){
                case idade <= 12 :
                    img.src = "imagens/f1.png"
                    break;
                case idade <= 25 :
                    img.src = "imagens/f2.png"
                    break;
                case idade > 25 && idade <= 50 :
                    img.src = "imagens/f3.png"
                    break;
                case idade > 50 && idade < 100 :
                    img.src = "imagens/f4.png"
                    break;
                case idade > 100 :
                    img.src = "imagens/f.png"
                break;
            }
            img.style.display = 'block';
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    }
}