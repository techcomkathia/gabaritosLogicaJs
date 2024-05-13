let num = 0
let limite = Number(prompt('Digite o numero do limite da contagem'))

while(num<=limite){
    console.log(num)
    num+=2 // incrementando de dois em dois para garantir apenas os pares
}

num = 0 // atualizando o valor
              
while(num<=limite){
  if (num%2==0){
    console.log(num)
  }                
  num+=1 // incrementando de um em um normalmente
}
