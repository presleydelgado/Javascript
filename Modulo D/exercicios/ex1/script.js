function startTime(){
    let msg = document.getElementById('mensagem')
let img = window.document.getElementById('imagem')
let agora = new Date()
let hora = agora.getHours()
let horamin = agora.getMinutes()
let horaseg = agora.getSeconds()
let resultado = document.querySelector('div.resultado')
horamin = checkTime(horamin);
horaseg = checkTime(horaseg);
resultado.innerHTML = `Agora são : ${hora}:${horamin}:${horaseg} horas`
setTimeout(startTime,1000);

if(hora >= 0 && hora < 12){
    img.src = 'imagens/dia-modified.png'
    msg.innerHTML = "Bom dia ! 🌞"
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora < 18){
    img.src = 'imagens/tarde-modified.png'
    msg.innerHTML = "Boa Tarde !⛅"
    document.body.style.background = '#b9846f'
}else {
    img.src = 'imagens/noite-modified.png'
    msg.innerHTML = "Boa Noite ! 🌝"
    document.body.style.background = '#515154'
}

}
//daqui pra baixo eu copiei,para dar o charme de fazer o relogio contar as horas continuamente
function checkTime(segundos) {
    if (segundos < 10) {
        segundos = "0" + segundos
    };  // add zero in front of numbers < 10
    return segundos;
  }

