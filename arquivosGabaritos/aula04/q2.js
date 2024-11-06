//Faça um programa que receba dez números e usando laços de repetição calcule mostre a quantidade de números entre 30 e 90.

let qtdNumeros = 10
let  totalNumIntervalo = 0

for(let i = 1; i <= qtdNumeros; i++ ){
    let num= Number(prompt(` Digite o ${i}º número`))
    if (num>=30 && num<=90){
        totalNumIntervalo += 1
    }
}

alert(`Entre os números 10 números digitados existem ${totalNumIntervalo} numeros entre 30 e 90`)
