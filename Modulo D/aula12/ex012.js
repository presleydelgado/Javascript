/*
let hora = 6
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 7 && hora < 12){
    console.log(`Bom Dia!`)
    }
    else if (hora => 12 && hora <= 18){   
        console.log(`Boa Tarde!`)        
    }else if (hora >= 18 && hora <= 24){
        console.log(`Boa Noite!`)
    }else if (hora >= 1 && hora < 7){
        console.log(`Boa Madrugada!`)
    }
*/
//agora para pegar a data do sistema:
let agora = new Date()
let hora = agora.getHours()
//let hora = 2
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 1 && hora <= 7){
    console.log(`Boa Madrugada!`)
}else if (hora >=7 && hora <= 12){
    console.log(`Bom Dia!`)
}else if (hora >= 13 && hora <= 18){
    console.log(`Boa Tarde!`)
}else if (hora >= 19 && hora <= 24){
    console.log(`Boa Noite!`)
}
//Minha tentativa depois de ter entendido,ta feio,mas funciona.
//O certo seria eu imagino que um switch pra isso.



