function startTime(){
let agora = new Date()
let hora = agora.getHours()
let horamin = agora.getMinutes()
let horaseg = agora.getSeconds()


let resultado = document.querySelector('div.resultado')
horamin = checkTime(horamin);
horaseg = checkTime(horaseg);
resultado.innerHTML = `Agora são : ${hora}:${horamin}:${horaseg} horas`
setTimeout(startTime,1000);
}
//daqui pra baixo eu copiei,para dar o charme de fazer o relogio contar as horas continuamente
function checkTime(segundos) {
    if (segundos < 10) {
        segundos = "0" + segundos
    };  // add zero in front of numbers < 10
    return segundos;
  }