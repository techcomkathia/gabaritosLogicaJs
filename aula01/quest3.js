//Leia três notas, calcule sua média e a exiba para o usuário

let nota1 = Number(prompt('Digite a primeira nota: ')) // leitura, conversão da string para numero e atribuição (estapas de dentro para fora)
let nota2 = Number(prompt('Digite a segunda nota: ')) // leitura, conversão da string para numero e atribuição (estapas de dentro para fora)
let nota3 = Number(prompt('Digite a terceira nota: '))// leitura, conversão da string para numero e atribuição (estapas de dentro para fora)
let media = (nota1 + nota2 + nota3)/ 3

alert('A média das notas inseridas é ' + media)