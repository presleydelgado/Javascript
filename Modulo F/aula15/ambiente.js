let num =[5,8,2,9,3]

//num[3] = 10 acrescenta o valor no lugar desejado
//Acrescenta o valor ao final da array
//num.push(10) // se você colocar aqui,influencia na ordem e no resultado,sempre se atente a ordem do código.

num.sort()
num.push(10)

console.log(num)
console.log(`O vetor tem ${num.length} posições`) //mostra o comprimento da array
console.log(`O primeiro valor do vetor é ${num[0]}`)
//console.log(num.sort()) // Mostra os valores em ordem crescente


for(let pos = 0; pos < num.length; pos++)
{
    console.log(num[pos]);
    
}

//Procurar valores dentro de uma array:

let pos = num.indexOf(4)
if(pos == -1)   //feito assim para ao inves de aparecer -1, aparecer a mensagem de que o número desejado não foi encontrado!
{
    console.log("Valor não encontrado!")
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}