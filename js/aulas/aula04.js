window.bancoAulas = window.bancoAulas || [];
window.bancoAulas.push({
  id: "aula04",
  numero: "04",
  titulo: "Repetição com for",
  resumo: "Use laços for para percorrer intervalos, gerar sequências, acumular valores e analisar conjuntos de dados.",
  questoes: [
    { nivel: "facil", enunciado: "Use for para exibir os números de 1 a 10.", resposta: `for (let numero = 1; numero <= 10; numero++) {
  console.log(numero);
}` },
    { nivel: "facil", enunciado: "Leia um limite e some todos os números de 1 até ele.", resposta: `const limite = Number(prompt("Limite:"));
let soma = 0;
for (let numero = 1; numero <= limite; numero++) soma += numero;
alert("Soma: " + soma);` },
    { nivel: "facil", enunciado: "Leia um número e exiba sua tabuada de 1 a 10.", resposta: `const numero = Number(prompt("Número:"));
for (let fator = 1; fator <= 10; fator++) {
  console.log(numero + " x " + fator + " = " + numero * fator);
}` },
    { nivel: "facil", enunciado: "Leia cinco notas e calcule a média da turma.", resposta: `let soma = 0;
for (let indice = 1; indice <= 5; indice++) {
  soma += Number(prompt("Nota " + indice + ":"));
}
alert("Média: " + (soma / 5).toFixed(2));` },
    { nivel: "facil", enunciado: "Leia dez números e conte quantos são positivos.", resposta: `let positivos = 0;
for (let indice = 1; indice <= 10; indice++) {
  if (Number(prompt("Número " + indice + ":")) > 0) positivos++;
}
alert("Positivos: " + positivos);` },
    { nivel: "facil", enunciado: "Exiba os múltiplos de 5 de 5 até 50 usando for.", resposta: `for (let numero = 5; numero <= 50; numero += 5) {
  console.log(numero);
}` },
    { nivel: "intermediario", enunciado: "Leia um inteiro não negativo e calcule o fatorial usando for.", resposta: `const numero = Number(prompt("Número não negativo:"));
let fatorial = 1;
for (let atual = 2; atual <= numero; atual++) fatorial *= atual;
alert("Fatorial: " + fatorial);` },
    { nivel: "intermediario", enunciado: "Leia um limite e some todos os números pares entre 1 e esse limite.", resposta: `const limite = Number(prompt("Limite:"));
let soma = 0;
for (let numero = 2; numero <= limite; numero += 2) soma += numero;
alert("Soma dos pares: " + soma);` },
    { nivel: "intermediario", enunciado: "Leia um número e conte quantos divisores inteiros positivos ele possui.", resposta: `const numero = Number(prompt("Inteiro positivo:"));
let divisores = 0;
for (let candidato = 1; candidato <= numero; candidato++) {
  if (numero % candidato === 0) divisores++;
}
alert("Quantidade de divisores: " + divisores);` },
    { nivel: "intermediario", enunciado: "Leia uma altura e exiba uma escada de asteriscos com essa quantidade de linhas.", resposta: `const altura = Number(prompt("Altura da escada:"));
for (let linha = 1; linha <= altura; linha++) {
  console.log("*".repeat(linha));
}` },
    { nivel: "intermediario", enunciado: "Leia N notas, calcule a média e conte quantas foram maiores ou iguais a 7.", resposta: `const quantidade = Number(prompt("Quantidade de notas:"));
let soma = 0;
let aprovadas = 0;
for (let indice = 1; indice <= quantidade; indice++) {
  const nota = Number(prompt("Nota " + indice + ":"));
  soma += nota;
  if (nota >= 7) aprovadas++;
}
alert("Média: " + (soma / quantidade).toFixed(2) + " | Notas >= 7: " + aprovadas);` },
    { nivel: "intermediario", enunciado: "Leia início e fim e exiba a tabuada de cada número nesse intervalo.", resposta: `const inicio = Number(prompt("Início:"));
const fim = Number(prompt("Fim:"));
for (let numero = inicio; numero <= fim; numero++) {
  for (let fator = 1; fator <= 10; fator++) {
    console.log(numero + " x " + fator + " = " + numero * fator);
  }
}` },
    { nivel: "avancado", enunciado: "Leia um limite e exiba todos os números primos entre 2 e esse limite.", resposta: `const limite = Number(prompt("Limite:"));
for (let numero = 2; numero <= limite; numero++) {
  let primo = true;
  for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
    if (numero % divisor === 0) primo = false;
  }
  if (primo) console.log(numero);
}` },
    { nivel: "avancado", enunciado: "Leia N e exiba os primeiros N termos da sequência de Fibonacci.", resposta: `const quantidade = Number(prompt("Quantidade de termos:"));
let anterior = 0;
let atual = 1;
for (let indice = 0; indice < quantidade; indice++) {
  console.log(anterior);
  const proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}` },
    { nivel: "avancado", enunciado: "Exiba os números de 1 a 100; para múltiplos de 3 mostre Fizz, de 5 Buzz e de ambos FizzBuzz.", resposta: `for (let numero = 1; numero <= 100; numero++) {
  if (numero % 3 === 0 && numero % 5 === 0) console.log("FizzBuzz");
  else if (numero % 3 === 0) console.log("Fizz");
  else if (numero % 5 === 0) console.log("Buzz");
  else console.log(numero);
}` },
    { nivel: "avancado", enunciado: "Leia um inteiro positivo e determine se ele é um número perfeito (a soma dos divisores próprios é igual a ele).", resposta: `const numero = Number(prompt("Inteiro positivo:"));
let soma = 0;
for (let divisor = 1; divisor < numero; divisor++) {
  if (numero % divisor === 0) soma += divisor;
}
alert(soma === numero ? "Número perfeito" : "Não é perfeito");` },
    { nivel: "avancado", enunciado: "Leia a altura de um triângulo e exiba um padrão centralizado de asteriscos.", resposta: `const altura = Number(prompt("Altura:"));
for (let linha = 1; linha <= altura; linha++) {
  const espacos = " ".repeat(altura - linha);
  const estrelas = "*".repeat(2 * linha - 1);
  console.log(espacos + estrelas);
}` },
    { nivel: "avancado", enunciado: "Leia N números e informe o menor, o maior e a média dos valores.", resposta: `const quantidade = Number(prompt("Quantidade de números:"));
let menor = Infinity;
let maior = -Infinity;
let soma = 0;
for (let indice = 1; indice <= quantidade; indice++) {
  const numero = Number(prompt("Número " + indice + ":"));
  menor = Math.min(menor, numero);
  maior = Math.max(maior, numero);
  soma += numero;
}
alert("Menor: " + menor + " | Maior: " + maior + " | Média: " + (soma / quantidade));` }
  ]
});