window.bancoAulas = window.bancoAulas || [];
window.bancoAulas.push({
  id: "aula02",
  numero: "02",
  titulo: "Decisões e condicionais",
  resumo: "Use comparações e estruturas condicionais para escolher ações de acordo com os dados informados.",
  questoes: [
    { nivel: "facil", enunciado: "Leia um número e informe se ele é positivo, negativo ou zero.", resposta: `const numero = Number(prompt("Número:"));
if (numero > 0) alert("Positivo");
else if (numero < 0) alert("Negativo");
else alert("Zero");` },
    { nivel: "facil", enunciado: "Leia um número e informe se ele é par ou ímpar.", resposta: `const numero = Number(prompt("Número:"));
if (numero % 2 === 0) alert("Par");
else alert("Ímpar");` },
    { nivel: "facil", enunciado: "Leia dois números e mostre o maior; se forem iguais, informe isso.", resposta: `const a = Number(prompt("Primeiro número:"));
const b = Number(prompt("Segundo número:"));
if (a > b) alert(a + " é maior");
else if (b > a) alert(b + " é maior");
else alert("São iguais");` },
    { nivel: "facil", enunciado: "Leia a idade e informe se a pessoa é maior de idade (18 anos ou mais).", resposta: `const idade = Number(prompt("Idade:"));
if (idade >= 18) alert("Maior de idade");
else alert("Menor de idade");` },
    { nivel: "facil", enunciado: "Leia uma nota e informe aprovado se ela for pelo menos 7; caso contrário, reprovado.", resposta: `const nota = Number(prompt("Nota:"));
if (nota >= 7) alert("Aprovado");
else alert("Reprovado");` },
    { nivel: "facil", enunciado: "Leia o valor de uma compra e aplique 10% de desconto se o total for maior que R$ 100.", resposta: `const compra = Number(prompt("Valor da compra:"));
if (compra > 100) alert("Total: R$ " + (compra * 0.9).toFixed(2));
else alert("Total: R$ " + compra.toFixed(2));` },
    { nivel: "intermediario", enunciado: "Leia uma nota de 0 a 10 e classifique: insuficiente (<5), regular (<7) ou bom (7 ou mais).", resposta: `const nota = Number(prompt("Nota (0 a 10):"));
if (nota < 5) alert("Insuficiente");
else if (nota < 7) alert("Regular");
else alert("Bom");` },
    { nivel: "intermediario", enunciado: "Calcule o IMC e informe abaixo do peso (<18,5), adequado (<25) ou acima do peso.", resposta: `const peso = Number(prompt("Peso em kg:"));
const altura = Number(prompt("Altura em metros:"));
const imc = peso / altura ** 2;
if (imc < 18.5) alert("Abaixo do peso");
else if (imc < 25) alert("Peso adequado");
else alert("Acima do peso");` },
    { nivel: "intermediario", enunciado: "Leia um número e verifique se ele é divisível por 3 e por 5 ao mesmo tempo.", resposta: `const numero = Number(prompt("Número:"));
if (numero % 3 === 0 && numero % 5 === 0) alert("Divisível por 3 e 5");
else alert("Não é divisível por ambos");` },
    { nivel: "intermediario", enunciado: "Leia a idade e classifique: criança (<13), adolescente (<18), adulto (<60) ou idoso.", resposta: `const idade = Number(prompt("Idade:"));
if (idade < 13) alert("Criança");
else if (idade < 18) alert("Adolescente");
else if (idade < 60) alert("Adulto");
else alert("Idoso");` },
    { nivel: "intermediario", enunciado: "Calcule o frete: grátis para compras de R$ 200 ou mais; caso contrário, custa R$ 15.", resposta: `const compra = Number(prompt("Valor da compra:"));
const frete = compra >= 200 ? 0 : 15;
alert("Frete: R$ " + frete.toFixed(2));` },
    { nivel: "intermediario", enunciado: "Leia três números e informe se os três são iguais, se há pelo menos dois iguais ou se são diferentes.", resposta: `const a = Number(prompt("Número 1:"));
const b = Number(prompt("Número 2:"));
const c = Number(prompt("Número 3:"));
if (a === b && b === c) alert("Três iguais");
else if (a === b || a === c || b === c) alert("Dois iguais");
else alert("Todos diferentes");` },
    { nivel: "avancado", enunciado: "Leia um ano e determine se é bissexto: divisível por 400, ou por 4 mas não por 100.", resposta: `const ano = Number(prompt("Ano:"));
const bissexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0);
alert(bissexto ? "Ano bissexto" : "Ano não bissexto");` },
    { nivel: "avancado", enunciado: "Leia três lados e valide um triângulo; se válido, classifique-o como equilátero, isósceles ou escaleno.", resposta: `const a = Number(prompt("Lado a:"));
const b = Number(prompt("Lado b:"));
const c = Number(prompt("Lado c:"));
if (a + b <= c || a + c <= b || b + c <= a) alert("Triângulo inválido");
else if (a === b && b === c) alert("Equilátero");
else if (a === b || a === c || b === c) alert("Isósceles");
else alert("Escaleno");` },
    { nivel: "avancado", enunciado: "Leia o consumo em kWh e calcule a tarifa: até 100 kWh, R$ 0,50/kWh; acima disso, R$ 0,75/kWh.", resposta: `const consumo = Number(prompt("Consumo em kWh:"));
const tarifa = consumo <= 100 ? 0.50 : 0.75;
const total = consumo * tarifa;
alert("Conta: R$ " + total.toFixed(2));` },
    { nivel: "avancado", enunciado: "Leia idade e renda mensal. Conceda benefício se idade ≥ 60 e renda < R$ 2.000, ou idade ≥ 65.", resposta: `const idade = Number(prompt("Idade:"));
const renda = Number(prompt("Renda mensal:"));
const recebe = (idade >= 60 && renda < 2000) || idade >= 65;
alert(recebe ? "Elegível" : "Não elegível");` },
    { nivel: "avancado", enunciado: "Leia dois números e um operador (+, -, * ou /), valide a divisão por zero e calcule o resultado.", resposta: `const a = Number(prompt("Primeiro número:"));
const operador = prompt("Operador (+, -, *, /):");
const b = Number(prompt("Segundo número:"));
let resultado;
if (operador === "+") resultado = a + b;
else if (operador === "-") resultado = a - b;
else if (operador === "*") resultado = a * b;
else if (operador === "/" && b !== 0) resultado = a / b;
else resultado = "Operação inválida";
alert(String(resultado));` },
    { nivel: "avancado", enunciado: "Leia a hora (0 a 23) e informe manhã (5–11), tarde (12–17), noite (18–22) ou madrugada.", resposta: `const hora = Number(prompt("Hora (0 a 23):"));
if (hora < 0 || hora > 23) alert("Hora inválida");
else if (hora >= 5 && hora <= 11) alert("Manhã");
else if (hora <= 17) alert("Tarde");
else if (hora <= 22) alert("Noite");
else alert("Madrugada");` }
  ]
});