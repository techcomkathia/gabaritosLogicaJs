// Leia dois números e informe o maior deles.

let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Digite o segundo número: '))

if (num1 > num2) {
    console.log(' O primeiro número é maior que o segundo')    
}
else if(num1 < num2){
    console.log(' O primeiro número é menor que o segundo')    
}
else {
    console.log(' O primeiro número é igual que o segundo')   
}