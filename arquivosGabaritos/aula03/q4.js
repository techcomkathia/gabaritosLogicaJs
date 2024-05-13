// Escreva um loop while que exiba todos os números pares de 0 a 10, mostre quantos numeros pares existem no intervalo e a soma deles no console


let contator = 0

let soma = 0

let num = 0

              
while(num<=10){
  if (num%2==0){
    console.log(num)
    contator+=1
    soma+= num
  }                
  num+=1 // incrementando de um em um normalmente
}

console.log(`No intevalo dos números 0 a 10 temos ${contator} números pares e a soma destes números é ${soma} `)