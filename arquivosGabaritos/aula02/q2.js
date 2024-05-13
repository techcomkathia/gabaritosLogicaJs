// Escreva um algoritmo que leia três valores. A, B, C. E informe se a soma de A + B é maior que C.

let A = Number(prompt('Digite o valor para A'))
let B = Number(prompt('Digite o valor para B'))
let C = Number(prompt('Digite o valor para C'))


if( (A+B) > C){
    console.log(`A soma de A (${A}) e de B (${B} É MAIOR que C(${C}))`)
}
else{
    console.log(`A soma de A (${A}) e de B (${B} NÃO É MAIOR que C(${C}))`)
}