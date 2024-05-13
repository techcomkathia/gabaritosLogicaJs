// Escreva um loop while que exiba os números de 0 ao número passado pelo usuário (utilize prompt)

let num = 0
let limite = Number(prompt('Digite o número limite da contagem'))

while (num<=limite){
    console.log(num)
    num+=1 //atualização da condição
}