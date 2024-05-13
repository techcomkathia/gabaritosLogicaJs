//Leia o salário de um funcionário e exiba o novo salário deste funcionário com um aumento de 20%

let salario = prompt('Digite seu salário')
salario = parseFloat(salario) // converter string para decimal

salario *= 1.2 

// ou 
// salario = salario + (salario * 0.02)

//ou 
// salario += salario*0.2

alert('O novo salário com aumento de 20% é de R$'+ salario)


