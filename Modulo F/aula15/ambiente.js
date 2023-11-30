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
    
    console.log(num[pos])
}