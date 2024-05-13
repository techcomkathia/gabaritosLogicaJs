let peso = Number(prompt( 'Digite seu peso em kg: ')) 
let altura = Number(prompt( 'Digite sua altura em metros: ')) 

// Calcular o IMC
let imc = peso / (altura * altura) 

// Determinar a condição com base no IMC calculado
let condicao = '' 
if (imc < 18.5) {
    condicao =  'Abaixo do peso ' 
} else if (imc >= 18.5 && imc < 25) {
    condicao =  'Peso normal ' 
} else if (imc >= 25 && imc < 30) {
    condicao =  'Acima do peso ' 
} else {
    condicao =  'Obeso ' 
}

// Exibir a condição do IMC
alert(`Seu IMC é ${imc} e você está ${condicao}`) 