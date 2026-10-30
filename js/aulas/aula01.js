window.bancoAulas = window.bancoAulas || [];
window.bancoAulas.push({
  id: "aula01",
  numero: "01",
  titulo: "Dados e cálculos",
  resumo: "Pratique entrada e conversão de dados, operações aritméticas e fórmulas do cotidiano.",
  questoes: [
    { id: "A01-Q01", nivel: "facil", enunciado: "Leia dois números e mostre a soma.", resposta: `const a = Number(prompt("Primeiro número:"));
const b = Number(prompt("Segundo número:"));
alert(a + b);` },
    { id: "A01-Q02", nivel: "facil", enunciado: "Leia dois números e mostre a diferença entre o primeiro e o segundo.", resposta: `const primeiro = Number(prompt("Primeiro número:"));
const segundo = Number(prompt("Segundo número:"));
alert(primeiro - segundo);` },
    { id: "A01-Q03", nivel: "facil", enunciado: "Leia o preço de um produto e calcule o preço com aumento de 10%.", resposta: `const preco = Number(prompt("Preço do produto:"));
const precoAtualizado = preco * 1.10;
alert("Novo preço: R$ " + precoAtualizado.toFixed(2));` },
    { id: "A01-Q04", nivel: "facil", enunciado: "Leia três notas e exiba a média aritmética.", resposta: `const nota1 = Number(prompt("Nota 1:"));
const nota2 = Number(prompt("Nota 2:"));
const nota3 = Number(prompt("Nota 3:"));
alert("Média: " + ((nota1 + nota2 + nota3) / 3).toFixed(2));` },
    { id: "A01-Q05", nivel: "facil", enunciado: "Leia o lado de um quadrado e calcule sua área.", resposta: `const lado = Number(prompt("Lado do quadrado:"));
const area = lado ** 2;
alert("Área: " + area);` },
    { id: "A01-Q06", nivel: "facil", enunciado: "Leia base e altura de um triângulo e calcule sua área.", resposta: `const base = Number(prompt("Base:"));
const altura = Number(prompt("Altura:"));
const area = (base * altura) / 2;
alert("Área: " + area);` },
    { id: "A01-Q07", nivel: "intermediario", enunciado: "Leia o raio de um círculo e calcule sua área usando Math.PI.", resposta: `const raio = Number(prompt("Raio:"));
const area = Math.PI * raio ** 2;
alert("Área: " + area.toFixed(2));` },
    { id: "A01-Q08", nivel: "intermediario", enunciado: "Converta uma duração total em minutos para horas e minutos restantes.", resposta: `const totalMinutos = Number(prompt("Duração em minutos:"));
const horas = Math.floor(totalMinutos / 60);
const minutos = totalMinutos % 60;
alert(horas + " h e " + minutos + " min");` },
    { id: "A01-Q09", nivel: "intermediario", enunciado: "Converta uma temperatura em Celsius para Fahrenheit. Fórmula: F = C × 9/5 + 32.", resposta: `const celsius = Number(prompt("Temperatura em Celsius:"));
const fahrenheit = celsius * 9 / 5 + 32;
alert(fahrenheit.toFixed(1) + " °F");` },
    { id: "A01-Q10", nivel: "intermediario", enunciado: "Leia o preço e o percentual de desconto e mostre o valor final.", resposta: `const preco = Number(prompt("Preço:"));
const percentual = Number(prompt("Desconto (%):"));
const valorFinal = preco * (1 - percentual / 100);
alert("Valor final: R$ " + valorFinal.toFixed(2));` },
    { id: "A01-Q11", nivel: "intermediario", enunciado: "Calcule o IMC a partir do peso em kg e da altura em metros.", resposta: `const peso = Number(prompt("Peso em kg:"));
const altura = Number(prompt("Altura em metros:"));
const imc = peso / altura ** 2;
alert("IMC: " + imc.toFixed(1));` },
    { id: "A01-Q12", nivel: "intermediario", enunciado: "Leia litros abastecidos e preço por litro e calcule o custo total.", resposta: `const litros = Number(prompt("Litros abastecidos:"));
const precoLitro = Number(prompt("Preço por litro:"));
const total = litros * precoLitro;
alert("Total: R$ " + total.toFixed(2));` },
    { id: "A01-Q13", nivel: "avancado", enunciado: "Leia comprimento, largura e altura de uma caixa e calcule seu volume.", resposta: `const comprimento = Number(prompt("Comprimento:"));
const largura = Number(prompt("Largura:"));
const altura = Number(prompt("Altura:"));
const volume = comprimento * largura * altura;
alert("Volume: " + volume);` },
    { id: "A01-Q14", nivel: "avancado", enunciado: "Leia distância percorrida em km e tempo em horas e calcule a velocidade média.", resposta: `const distancia = Number(prompt("Distância em km:"));
const tempo = Number(prompt("Tempo em horas:"));
const velocidadeMedia = distancia / tempo;
alert("Velocidade média: " + velocidadeMedia.toFixed(2) + " km/h");` },
    { id: "A01-Q15", nivel: "avancado", enunciado: "Calcule o salário final com comissão: salário base mais 6% sobre o valor vendido.", resposta: `const salarioBase = Number(prompt("Salário base:"));
const vendas = Number(prompt("Total vendido:"));
const salarioFinal = salarioBase + vendas * 0.06;
alert("Salário final: R$ " + salarioFinal.toFixed(2));` },
    { id: "A01-Q16", nivel: "avancado", enunciado: "Leia duas notas e calcule a média ponderada, com pesos 2 e 3.", resposta: `const nota1 = Number(prompt("Nota com peso 2:"));
const nota2 = Number(prompt("Nota com peso 3:"));
const media = (nota1 * 2 + nota2 * 3) / 5;
alert("Média ponderada: " + media.toFixed(2));` },
    { id: "A01-Q17", nivel: "avancado", enunciado: "Leia preço e quantidade de três produtos diferentes e calcule o total da compra.", resposta: `let total = 0;
for (let item = 1; item <= 3; item++) {
  const preco = Number(prompt("Preço do produto " + item + ":"));
  const quantidade = Number(prompt("Quantidade:"));
  total += preco * quantidade;
}
alert("Total: R$ " + total.toFixed(2));` },
    { id: "A01-Q18", nivel: "avancado", enunciado: "Divida uma conta igualmente entre pessoas, incluindo um percentual de gorjeta informado.", resposta: `const conta = Number(prompt("Valor da conta:"));
const gorjeta = Number(prompt("Gorjeta (%):"));
const pessoas = Number(prompt("Número de pessoas:"));
const totalPorPessoa = conta * (1 + gorjeta / 100) / pessoas;
alert("Cada pessoa paga R$ " + totalPorPessoa.toFixed(2));` }
  ]
});