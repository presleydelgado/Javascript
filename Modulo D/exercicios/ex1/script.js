let agora = new Date()
let hora = agora.getHours()
let horamin = agora.getMinutes()
let horaseg = agora.getSeconds()

let resultado = document.querySelector('div.resultado')
resultado.innerHTML = `Agora são : ${hora}:${horamin}:${horaseg} horas`


