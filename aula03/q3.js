// Escreva um loop while que exiba todos os números pares de 0 a 10.

let num = 0

while(num<=10){
    console.log(num)
    num+=2 // incrementando de dois em dois para garantir apenas os pares
}

num = 0 // atualizando o valor
              
while(num<=10){
  if (num%2==0){
    console.log(num)
  }                
  num+=1 // incrementando de um em um normalmente
}
