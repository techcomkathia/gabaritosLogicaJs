window.bancoAulas = window.bancoAulas || [];
window.bancoAulas.push({
  id: "aula02",
  numero: "02",
  titulo: "Decisões e condicionais",
  resumo: "Use comparações e estruturas condicionais para escolher ações de acordo com os dados informados.",
  questoes: [
    { id: "A02-Q01", nivel: "facil", enunciado: "Leia um número e informe se ele é positivo, negativo ou zero.", resposta: `const numero = Number(prompt("Número:"));
if (numero > 0) alert("Positivo");
else if (numero < 0) alert("Negativo");
else alert("Zero");` },
    { id: "A02-Q02", nivel: "facil", enunciado: "Leia um número e informe se ele é par ou ímpar.", resposta: `const numero = Number(prompt("Número:"));
if (numero % 2 === 0) alert("Par");
else alert("Ímpar");` },
    { id: "A02-Q03", nivel: "facil", enunciado: "Leia dois números e mostre o maior; se forem iguais, informe isso.", resposta: `const a = Number(prompt("Primeiro número:"));
const b = Number(prompt("Segundo número:"));
if (a > b) alert(a + " é maior");
else if (b > a) alert(b + " é maior");
else alert("São iguais");` },
    { id: "A02-Q04", nivel: "facil", enunciado: "Leia a idade e informe se a pessoa é maior de idade (18 anos ou mais).", resposta: `const idade = Number(prompt("Idade:"));
if (idade >= 18) alert("Maior de idade");
else alert("Menor de idade");` },
    { id: "A02-Q05", nivel: "facil", enunciado: "Leia uma nota e informe aprovado se ela for pelo menos 7; caso contrário, reprovado.", resposta: `const nota = Number(prompt("Nota:"));
if (nota >= 7) alert("Aprovado");
else alert("Reprovado");` },
    { id: "A02-Q06", nivel: "facil", enunciado: "Leia o valor de uma compra e aplique 10% de desconto se o total for maior que R$ 100.", resposta: `const compra = Number(prompt("Valor da compra:"));
if (compra > 100) alert("Total: R$ " + (compra * 0.9).toFixed(2));
else alert("Total: R$ " + compra.toFixed(2));` },
    { id: "A02-Q07", nivel: "intermediario", enunciado: "Leia uma nota de 0 a 10 e classifique: insuficiente (<5), regular (<7) ou bom (7 ou mais).", resposta: `const nota = Number(prompt("Nota (0 a 10):"));
if (nota < 5) alert("Insuficiente");
else if (nota < 7) alert("Regular");
else alert("Bom");` },
    { id: "A02-Q08", nivel: "intermediario", enunciado: "Calcule o IMC e informe abaixo do peso (<18,5), adequado (<25) ou acima do peso.", resposta: `const peso = Number(prompt("Peso em kg:"));
const altura = Number(prompt("Altura em metros:"));
const imc = peso / altura ** 2;
if (imc < 18.5) alert("Abaixo do peso");
else if (imc < 25) alert("Peso adequado");
else alert("Acima do peso");` },
    { id: "A02-Q09", nivel: "intermediario", enunciado: "Leia um número e verifique se ele é divisível por 3 e por 5 ao mesmo tempo.", resposta: `const numero = Number(prompt("Número:"));
if (numero % 3 === 0 && numero % 5 === 0) alert("Divisível por 3 e 5");
else alert("Não é divisível por ambos");` },
    { id: "A02-Q10", nivel: "intermediario", enunciado: "Leia a idade e classifique: criança (<13), adolescente (<18), adulto (<60) ou idoso.", resposta: `const idade = Number(prompt("Idade:"));
if (idade < 13) alert("Criança");
else if (idade < 18) alert("Adolescente");
else if (idade < 60) alert("Adulto");
else alert("Idoso");` },
    { id: "A02-Q11", nivel: "intermediario", enunciado: "Calcule o frete: grátis para compras de R$ 200 ou mais; caso contrário, custa R$ 15.", resposta: `const compra = Number(prompt("Valor da compra:"));
const frete = compra >= 200 ? 0 : 15;
alert("Frete: R$ " + frete.toFixed(2));` },
    { id: "A02-Q12", nivel: "intermediario", enunciado: "Leia três números e informe se os três são iguais, se há pelo menos dois iguais ou se são diferentes.", resposta: `const a = Number(prompt("Número 1:"));
const b = Number(prompt("Número 2:"));
const c = Number(prompt("Número 3:"));
if (a === b && b === c) alert("Três iguais");
else if (a === b || a === c || b === c) alert("Dois iguais");
else alert("Todos diferentes");` },
    { id: "A02-Q13", nivel: "avancado", enunciado: "Leia um ano e determine se é bissexto: divisível por 400, ou por 4 mas não por 100.", resposta: `const ano = Number(prompt("Ano:"));
const bissexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0);
alert(bissexto ? "Ano bissexto" : "Ano não bissexto");` },
    { id: "A02-Q14", nivel: "avancado", enunciado: "Leia três lados e valide um triângulo; se válido, classifique-o como equilátero, isósceles ou escaleno.", resposta: `const a = Number(prompt("Lado a:"));
const b = Number(prompt("Lado b:"));
const c = Number(prompt("Lado c:"));
if (a + b <= c || a + c <= b || b + c <= a) alert("Triângulo inválido");
else if (a === b && b === c) alert("Equilátero");
else if (a === b || a === c || b === c) alert("Isósceles");
else alert("Escaleno");` },
    { id: "A02-Q15", nivel: "avancado", enunciado: "Leia o consumo em kWh e calcule a tarifa: até 100 kWh, R$ 0,50/kWh; acima disso, R$ 0,75/kWh.", resposta: `const consumo = Number(prompt("Consumo em kWh:"));
const tarifa = consumo <= 100 ? 0.50 : 0.75;
const total = consumo * tarifa;
alert("Conta: R$ " + total.toFixed(2));` },
    { id: "A02-Q16", nivel: "avancado", enunciado: "Leia idade e renda mensal. Conceda benefício se idade ≥ 60 e renda < R$ 2.000, ou idade ≥ 65.", resposta: `const idade = Number(prompt("Idade:"));
const renda = Number(prompt("Renda mensal:"));
const recebe = (idade >= 60 && renda < 2000) || idade >= 65;
alert(recebe ? "Elegível" : "Não elegível");` },
    { id: "A02-Q17", nivel: "avancado", enunciado: "Leia dois números e um operador (+, -, * ou /), valide a divisão por zero e calcule o resultado.", resposta: `const a = Number(prompt("Primeiro número:"));
const operador = prompt("Operador (+, -, *, /):");
const b = Number(prompt("Segundo número:"));
let resultado;
if (operador === "+") resultado = a + b;
else if (operador === "-") resultado = a - b;
else if (operador === "*") resultado = a * b;
else if (operador === "/" && b !== 0) resultado = a / b;
else resultado = "Operação inválida";
alert(String(resultado));` },
    { id: "A02-Q18", nivel: "avancado", enunciado: "Leia a hora (0 a 23) e informe manhã (5–11), tarde (12–17), noite (18–22) ou madrugada.", resposta: `const hora = Number(prompt("Hora (0 a 23):"));
if (hora < 0 || hora > 23) alert("Hora inválida");
else if (hora >= 5 && hora <= 11) alert("Manhã");
else if (hora <= 17) alert("Tarde");
else if (hora <= 22) alert("Noite");
else alert("Madrugada");` },
    { id: "A02-Q19", nivel: "facil", enunciado: "Leia um número. Se ele for maior ou igual a zero, mostre sua raiz quadrada com Math.sqrt; se for negativo, mostre \"Número inválido\".", resposta: `const numero = Number(prompt("Número:"));
if (numero >= 0) alert("Raiz quadrada: " + Math.sqrt(numero).toFixed(2));
else alert("Número inválido");` },
    { id: "A02-Q20", nivel: "facil", enunciado: "Leia o salário de um trabalhador e o valor da prestação de um empréstimo. Se a prestação for maior que 20% do salário, mostre \"Empréstimo não concedido\"; caso contrário, \"Empréstimo concedido\".", resposta: `const salario = Number(prompt("Salário:"));
const prestacao = Number(prompt("Valor da prestação:"));
if (prestacao > salario * 0.2) alert("Empréstimo não concedido");
else alert("Empréstimo concedido");` },
    { id: "A02-Q21", nivel: "facil", enunciado: "Leia a altura (h) e o sexo de uma pessoa e mostre o peso ideal: homens (72.7 * h) - 58; mulheres (62.1 * h) - 44.7.", resposta: `const altura = Number(prompt("Altura em metros:"));
const sexo = prompt("Sexo (M ou F):").toUpperCase();
if (sexo === "M") alert("Peso ideal: " + (72.7 * altura - 58).toFixed(2) + " kg");
else if (sexo === "F") alert("Peso ideal: " + (62.1 * altura - 44.7).toFixed(2) + " kg");
else alert("Sexo inválido");` },
    { id: "A02-Q22", nivel: "intermediario", enunciado: "Leia as notas de 3 provas e calcule a média ponderada (pesos 1, 1 e 2). Mostre a média e se o aluno foi aprovado (média igual ou superior a 60) ou reprovado.", resposta: `const prova1 = Number(prompt("Nota da prova 1:"));
const prova2 = Number(prompt("Nota da prova 2:"));
const prova3 = Number(prompt("Nota da prova 3:"));
const media = (prova1 * 1 + prova2 * 1 + prova3 * 2) / 4;
if (media >= 60) alert("Média: " + media.toFixed(2) + " | Aprovado");
else alert("Média: " + media.toFixed(2) + " | Reprovado");` },
    { id: "A02-Q23", nivel: "intermediario", enunciado: "Leia três notas de 0 a 10: trabalho de laboratório (peso 2), avaliação semestral (peso 3) e exame final (peso 5). Valide as notas e informe reprovado (média de 0 a 2,9), recuperação (3 a 4,9) ou aprovado.", resposta: `const laboratorio = Number(prompt("Trabalho de laboratório (0 a 10):"));
const semestral = Number(prompt("Avaliação semestral (0 a 10):"));
const exame = Number(prompt("Exame final (0 a 10):"));
const notasValidas = laboratorio >= 0 && laboratorio <= 10
  && semestral >= 0 && semestral <= 10
  && exame >= 0 && exame <= 10;
if (!notasValidas) {
  alert("As notas devem estar entre 0 e 10");
} else {
  const media = (laboratorio * 2 + semestral * 3 + exame * 5) / 10;
  if (media < 3) alert("Média " + media.toFixed(1) + ": reprovado");
  else if (media < 5) alert("Média " + media.toFixed(1) + ": recuperação");
  else alert("Média " + media.toFixed(1) + ": aprovado");
}` },
    { id: "A02-Q24", nivel: "intermediario", enunciado: "Usando switch, leia um inteiro entre 1 e 7 e mostre o dia da semana correspondente (1 é domingo, 2 é segunda-feira e assim por diante).", resposta: `const dia = Number(prompt("Número de 1 a 7:"));
switch (dia) {
  case 1: alert("Domingo"); break;
  case 2: alert("Segunda-feira"); break;
  case 3: alert("Terça-feira"); break;
  case 4: alert("Quarta-feira"); break;
  case 5: alert("Quinta-feira"); break;
  case 6: alert("Sexta-feira"); break;
  case 7: alert("Sábado"); break;
  default: alert("Número inválido");
}` },
    { id: "A02-Q25", nivel: "intermediario", enunciado: "Mostre um menu com 4 operações matemáticas básicas. Depois que o usuário escolher uma opção, leia dois valores, realize a operação e mostre o resultado.", resposta: `const opcao = Number(prompt("1 - Somar | 2 - Subtrair | 3 - Multiplicar | 4 - Dividir"));
if (opcao < 1 || opcao > 4) {
  alert("Opção inválida");
} else {
  const a = Number(prompt("Primeiro valor:"));
  const b = Number(prompt("Segundo valor:"));
  if (opcao === 1) alert("Resultado: " + (a + b));
  else if (opcao === 2) alert("Resultado: " + (a - b));
  else if (opcao === 3) alert("Resultado: " + (a * b));
  else if (b === 0) alert("Não é possível dividir por zero");
  else alert("Resultado: " + (a / b));
}` },
    { id: "A02-Q26", nivel: "intermediario", enunciado: "Leia um número inteiro e verifique se ele é divisível por 3 ou por 5, mas não pelos dois ao mesmo tempo.", resposta: `const numero = Number(prompt("Número inteiro:"));
const por3 = numero % 3 === 0;
const por5 = numero % 5 === 0;
if ((por3 || por5) && !(por3 && por5)) alert("Divisível por 3 ou por 5, mas não pelos dois");
else alert("Não atende à condição");` },
    { id: "A02-Q27", nivel: "intermediario", enunciado: "Leia a idade e o tempo de serviço de um trabalhador e informe se ele pode se aposentar: ter pelo menos 65 anos, ou ter trabalhado pelo menos 30 anos, ou ter pelo menos 60 anos e trabalhado pelo menos 25 anos.", resposta: `const idade = Number(prompt("Idade:"));
const tempo = Number(prompt("Tempo de serviço (anos):"));
const podeAposentar = idade >= 65 || tempo >= 30 || (idade >= 60 && tempo >= 25);
alert(podeAposentar ? "Pode se aposentar" : "Ainda não pode se aposentar");` },
    { id: "A02-Q28", nivel: "avancado", enunciado: "Leia três números e mostre-os em ordem crescente.", resposta: `let a = Number(prompt("Número 1:"));
let b = Number(prompt("Número 2:"));
let c = Number(prompt("Número 3:"));
let troca;
if (a > b) { troca = a; a = b; b = troca; }
if (a > c) { troca = a; a = c; c = troca; }
if (b > c) { troca = b; b = c; c = troca; }
alert("Ordem crescente: " + a + ", " + b + ", " + c);` },
    { id: "A02-Q29", nivel: "avancado", enunciado: "Leia o salário atual e o tempo de serviço (em anos) e mostre o salário reajustado. Reajuste: até R$ 500, 25%; até R$ 1.000, 20%; até R$ 1.500, 15%; até R$ 2.000, 10%; acima disso, sem reajuste. Bônus: abaixo de 1 ano, sem bônus; 1 a 3 anos, R$ 100; 4 a 6 anos, R$ 200; 7 a 10 anos, R$ 300; mais de 10 anos, R$ 500. Se não houver reajuste nem bônus, informe que o funcionário não tem direito a aumento.", resposta: `const salario = Number(prompt("Salário atual:"));
const tempo = Number(prompt("Tempo de serviço (anos):"));
let reajuste;
if (salario <= 500) reajuste = 0.25;
else if (salario <= 1000) reajuste = 0.20;
else if (salario <= 1500) reajuste = 0.15;
else if (salario <= 2000) reajuste = 0.10;
else reajuste = 0;
let bonus;
if (tempo < 1) bonus = 0;
else if (tempo <= 3) bonus = 100;
else if (tempo <= 6) bonus = 200;
else if (tempo <= 10) bonus = 300;
else bonus = 500;
if (reajuste === 0 && bonus === 0) alert("Funcionário sem direito a aumento");
else alert("Salário reajustado: R$ " + (salario * (1 + reajuste) + bonus).toFixed(2));` },
    { id: "A02-Q30", nivel: "intermediario", enunciado: "Calcule o IMC e mostre a classificação: abaixo de 18,5, abaixo do peso; até 24,9, saudável; até 29,9, peso em excesso; até 34,9, obesidade grau 1; até 39,9, obesidade grau 2 (severa); 40 ou mais, obesidade grau 3 (mórbida).", resposta: `const peso = Number(prompt("Peso em kg:"));
const altura = Number(prompt("Altura em metros:"));
const imc = peso / altura ** 2;
let classificacao;
if (imc < 18.5) classificacao = "Abaixo do peso";
else if (imc < 25) classificacao = "Saudável";
else if (imc < 30) classificacao = "Peso em excesso";
else if (imc < 35) classificacao = "Obesidade grau 1";
else if (imc < 40) classificacao = "Obesidade grau 2 (severa)";
else classificacao = "Obesidade grau 3 (mórbida)";
alert("IMC: " + imc.toFixed(1) + " | " + classificacao);` },
    { id: "A02-Q31", nivel: "facil", enunciado: "Leia três valores A, B e C e informe se a soma de A + B é maior que C.", resposta: `const a = Number(prompt("Valor de A:"));
const b = Number(prompt("Valor de B:"));
const c = Number(prompt("Valor de C:"));
if (a + b > c) alert("A + B é maior que C");
else alert("A + B não é maior que C");` },
    { id: "A02-Q32", nivel: "facil", enunciado: "Leia dois valores A e B. Se forem iguais, mostre a soma deles; caso contrário, mostre a multiplicação.", resposta: `const a = Number(prompt("Valor de A:"));
const b = Number(prompt("Valor de B:"));
if (a === b) alert("Soma: " + (a + b));
else alert("Multiplicação: " + (a * b));` },
    { id: "A02-Q33", nivel: "facil", enunciado: "Leia um número inteiro. Se for par, some 5; se for ímpar, some 8. Mostre o resultado.", resposta: `let numero = Number(prompt("Número inteiro:"));
if (numero % 2 === 0) numero += 5;
else numero += 8;
alert("Resultado: " + numero);` }
  ]
});