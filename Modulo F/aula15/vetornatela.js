let valores = [8,1,7,4,2,9]

valores.sort()
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
//FORMA ERRADA DE SE FAZER
*/
//Forma correnta :
/*
for(let a = 0; a < valores.length; a++)
{
    console.log(`A posição ${a} tem o valor ${valores[a]}`)
}
*/
//Forma ainda mais resumida VV:

for(let a in valores) //< Para cada posição dentro de "valores"
{
    console.log(`A posição ${a} tem o valor ${valores[a]}`)
}

