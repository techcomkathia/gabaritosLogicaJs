let qtdPessoas = 5
let somaIdades = 0
let mediaIdades = 0
let limitePeso = 90
let qtdAcimaPeso= 0

for(let i=1; i<= qtdPessoas; i++){
    let pesoPessoa = Number(prompt(`Digite o peso da pessoa nº ${i}`))
    let idadePessoa = Number(prompt(`Digite a idade da pessoa nº ${i}`))

    if(pesoPessoa> limitePeso){
        qtdAcimaPeso += 1
    }

    somaIdades+= idade
}
mediaIdades = somaIdades/qtdPessoas

alert(`A média de idade das ${qtdPessoas} pessoas é de ${mediaIdades}`)
alert(`A média de idade das ${qtdPessoas} pessoas é de ${mediaIdades.toFixed(1)}`) // limitar em uma casa decimal

alert(`No grupo das ${qtdPessoas} pessoas, existem ${qtdAcimaPeso} acima dos 90kg`)