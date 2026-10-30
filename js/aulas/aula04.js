window.bancoAulas = window.bancoAulas || [];
window.bancoAulas.push({
  id: "aula04",
  numero: "04",
  titulo: "Repetição com for",
  resumo: "Use laços for para percorrer intervalos, gerar sequências, acumular valores e analisar conjuntos de dados.",
  questoes: [
    { id: "A04-Q01", nivel: "facil", enunciado: "Use for para exibir os números de 1 a 10.", resposta: `for (let numero = 1; numero <= 10; numero++) {
  console.log(numero);
}` },
    { id: "A04-Q02", nivel: "facil", enunciado: "Leia um limite e some todos os números de 1 até ele.", resposta: `const limite = Number(prompt("Limite:"));
let soma = 0;
for (let numero = 1; numero <= limite; numero++) soma += numero;
alert("Soma: " + soma);` },
    { id: "A04-Q03", nivel: "facil", enunciado: "Leia um número e exiba sua tabuada de 1 a 10.", resposta: `const numero = Number(prompt("Número:"));
for (let fator = 1; fator <= 10; fator++) {
  console.log(numero + " x " + fator + " = " + numero * fator);
}` },
    { id: "A04-Q04", nivel: "facil", enunciado: "Leia cinco notas e calcule a média da turma.", resposta: `let soma = 0;
for (let indice = 1; indice <= 5; indice++) {
  soma += Number(prompt("Nota " + indice + ":"));
}
alert("Média: " + (soma / 5).toFixed(2));` },
    { id: "A04-Q05", nivel: "facil", enunciado: "Leia dez números e conte quantos são positivos.", resposta: `let positivos = 0;
for (let indice = 1; indice <= 10; indice++) {
  if (Number(prompt("Número " + indice + ":")) > 0) positivos++;
}
alert("Positivos: " + positivos);` },
    { id: "A04-Q06", nivel: "facil", enunciado: "Exiba os múltiplos de 5 de 5 até 50 usando for.", resposta: `for (let numero = 5; numero <= 50; numero += 5) {
  console.log(numero);
}` },
    { id: "A04-Q07", nivel: "intermediario", enunciado: "Leia um inteiro não negativo e calcule o fatorial usando for.", resposta: `const numero = Number(prompt("Número não negativo:"));
let fatorial = 1;
for (let atual = 2; atual <= numero; atual++) fatorial *= atual;
alert("Fatorial: " + fatorial);` },
    { id: "A04-Q08", nivel: "intermediario", enunciado: "Leia um limite e some todos os números pares entre 1 e esse limite.", resposta: `const limite = Number(prompt("Limite:"));
let soma = 0;
for (let numero = 2; numero <= limite; numero += 2) soma += numero;
alert("Soma dos pares: " + soma);` },
    { id: "A04-Q09", nivel: "intermediario", enunciado: "Leia um número e conte quantos divisores inteiros positivos ele possui.", resposta: `const numero = Number(prompt("Inteiro positivo:"));
let divisores = 0;
for (let candidato = 1; candidato <= numero; candidato++) {
  if (numero % candidato === 0) divisores++;
}
alert("Quantidade de divisores: " + divisores);` },
    { id: "A04-Q10", nivel: "intermediario", enunciado: "Leia uma altura e exiba uma escada de asteriscos com essa quantidade de linhas.", resposta: `const altura = Number(prompt("Altura da escada:"));
for (let linha = 1; linha <= altura; linha++) {
  console.log("*".repeat(linha));
}` },
    { id: "A04-Q11", nivel: "intermediario", enunciado: "Leia N notas, calcule a média e conte quantas foram maiores ou iguais a 7.", resposta: `const quantidade = Number(prompt("Quantidade de notas:"));
let soma = 0;
let aprovadas = 0;
for (let indice = 1; indice <= quantidade; indice++) {
  const nota = Number(prompt("Nota " + indice + ":"));
  soma += nota;
  if (nota >= 7) aprovadas++;
}
alert("Média: " + (soma / quantidade).toFixed(2) + " | Notas >= 7: " + aprovadas);` },
    { id: "A04-Q12", nivel: "intermediario", enunciado: "Leia início e fim e exiba a tabuada de cada número nesse intervalo.", resposta: `const inicio = Number(prompt("Início:"));
const fim = Number(prompt("Fim:"));
for (let numero = inicio; numero <= fim; numero++) {
  for (let fator = 1; fator <= 10; fator++) {
    console.log(numero + " x " + fator + " = " + numero * fator);
  }
}` },
    { id: "A04-Q13", nivel: "avancado", enunciado: "Leia um limite e exiba todos os números primos entre 2 e esse limite.", resposta: `const limite = Number(prompt("Limite:"));
for (let numero = 2; numero <= limite; numero++) {
  let primo = true;
  for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
    if (numero % divisor === 0) primo = false;
  }
  if (primo) console.log(numero);
}` },
    { id: "A04-Q14", nivel: "avancado", enunciado: "Leia N e exiba os primeiros N termos da sequência de Fibonacci.", resposta: `const quantidade = Number(prompt("Quantidade de termos:"));
let anterior = 0;
let atual = 1;
for (let indice = 0; indice < quantidade; indice++) {
  console.log(anterior);
  const proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}` },
    { id: "A04-Q15", nivel: "avancado", enunciado: "Exiba os números de 1 a 100; para múltiplos de 3 mostre Fizz, de 5 Buzz e de ambos FizzBuzz.", resposta: `for (let numero = 1; numero <= 100; numero++) {
  if (numero % 3 === 0 && numero % 5 === 0) console.log("FizzBuzz");
  else if (numero % 3 === 0) console.log("Fizz");
  else if (numero % 5 === 0) console.log("Buzz");
  else console.log(numero);
}` },
    { id: "A04-Q16", nivel: "avancado", enunciado: "Leia um inteiro positivo e determine se ele é um número perfeito (a soma dos divisores próprios é igual a ele).", resposta: `const numero = Number(prompt("Inteiro positivo:"));
let soma = 0;
for (let divisor = 1; divisor < numero; divisor++) {
  if (numero % divisor === 0) soma += divisor;
}
alert(soma === numero ? "Número perfeito" : "Não é perfeito");` },
    { id: "A04-Q17", nivel: "avancado", enunciado: "Leia a altura de um triângulo e exiba um padrão centralizado de asteriscos.", resposta: `const altura = Number(prompt("Altura:"));
for (let linha = 1; linha <= altura; linha++) {
  const espacos = " ".repeat(altura - linha);
  const estrelas = "*".repeat(2 * linha - 1);
  console.log(espacos + estrelas);
}` },
    { id: "A04-Q18", nivel: "avancado", enunciado: "Leia N números e informe o menor, o maior e a média dos valores.", resposta: `const quantidade = Number(prompt("Quantidade de números:"));
let menor = Infinity;
let maior = -Infinity;
let soma = 0;
for (let indice = 1; indice <= quantidade; indice++) {
  const numero = Number(prompt("Número " + indice + ":"));
  menor = Math.min(menor, numero);
  maior = Math.max(maior, numero);
  soma += numero;
}
alert("Menor: " + menor + " | Maior: " + maior + " | Média: " + (soma / quantidade));` },
    { id: "A04-Q19", nivel: "facil", enunciado: "Mostre os cinco primeiros múltiplos de 3 maiores que 0.", resposta: `for (let indice = 1; indice <= 5; indice++) {
  console.log(3 * indice);
}` },
    { id: "A04-Q20", nivel: "facil", enunciado: "Peça ao usuário que digite 10 valores e mostre a soma deles.", resposta: `let soma = 0;
for (let indice = 1; indice <= 10; indice++) {
  soma += Number(prompt("Valor " + indice + ":"));
}
alert("Soma: " + soma);` },
    { id: "A04-Q21", nivel: "intermediario", enunciado: "Leia 10 números e mostre o menor e o maior valor lido.", resposta: `let menor = Infinity;
let maior = -Infinity;
for (let indice = 1; indice <= 10; indice++) {
  const numero = Number(prompt("Número " + indice + ":"));
  if (numero < menor) menor = numero;
  if (numero > maior) maior = numero;
}
alert("Menor: " + menor + " | Maior: " + maior);` },
    { id: "A04-Q22", nivel: "facil", enunciado: "Leia um número inteiro N e mostre os N primeiros números naturais ímpares.", resposta: `const quantidade = Number(prompt("Quantidade de ímpares:"));
for (let indice = 0; indice < quantidade; indice++) {
  console.log(2 * indice + 1);
}` },
    { id: "A04-Q23", nivel: "facil", enunciado: "Calcule e mostre a soma dos 50 primeiros números pares positivos.", resposta: `let soma = 0;
for (let indice = 1; indice <= 50; indice++) soma += 2 * indice;
alert("Soma: " + soma);` },
    { id: "A04-Q24", nivel: "facil", enunciado: "Leia um número inteiro positivo N e mostre todos os números naturais de N até 0, em ordem decrescente.", resposta: `const limite = Number(prompt("Inteiro positivo:"));
for (let numero = limite; numero >= 0; numero--) {
  console.log(numero);
}` },
    { id: "A04-Q25", nivel: "facil", enunciado: "Leia um número inteiro positivo ímpar N e mostre todos os números ímpares de 1 até N, em ordem crescente.", resposta: `const limite = Number(prompt("Inteiro positivo ímpar:"));
for (let numero = 1; numero <= limite; numero += 2) {
  console.log(numero);
}` },
    { id: "A04-Q26", nivel: "intermediario", enunciado: "Use for para fazer 5 perguntas de soma com dois números aleatórios entre 1 e 99. Leia cada resposta, mostre a conta com o resultado correto e, ao final, a quantidade de acertos.", resposta: `let acertos = 0;
for (let pergunta = 1; pergunta <= 5; pergunta++) {
  const a = Math.floor(Math.random() * 99) + 1;
  const b = Math.floor(Math.random() * 99) + 1;
  const resposta = Number(prompt("Pergunta " + pergunta + ": quanto é " + a + " + " + b + "?"));
  if (resposta === a + b) acertos++;
  console.log(a + " + " + b + " = " + (a + b) + " | sua resposta: " + resposta);
}
alert("Acertos: " + acertos + " de 5");` },
    { id: "A04-Q27", nivel: "avancado", enunciado: "Leia a quantidade de números a serem lidos e, em seguida, os números. Mostre o maior deles e quantas vezes ele foi lido.", resposta: `const quantidade = Number(prompt("Quantos números serão lidos?"));
let maior = -Infinity;
let vezes = 0;
for (let indice = 1; indice <= quantidade; indice++) {
  const numero = Number(prompt("Número " + indice + ":"));
  if (numero > maior) {
    maior = numero;
    vezes = 1;
  } else if (numero === maior) {
    vezes++;
  }
}
alert("Maior: " + maior + " | Lido " + vezes + " vez(es)");` },
    { id: "A04-Q28", nivel: "avancado", enunciado: "Leia dois números e, considerando o intervalo entre eles (incluindo os digitados), mostre a soma dos números pares e a multiplicação dos números ímpares.", resposta: `const a = Number(prompt("Primeiro número:"));
const b = Number(prompt("Segundo número:"));
const inicio = Math.min(a, b);
const fim = Math.max(a, b);
let somaPares = 0;
let produtoImpares = 1;
let temImpar = false;
for (let numero = inicio; numero <= fim; numero++) {
  if (numero % 2 === 0) {
    somaPares += numero;
  } else {
    produtoImpares *= numero;
    temImpar = true;
  }
}
alert("Soma dos pares: " + somaPares);
alert(temImpar ? "Produto dos ímpares: " + produtoImpares : "Não há ímpares no intervalo");` },
    { id: "A04-Q29", nivel: "intermediario", enunciado: "Leia um número positivo e mostre todos os seus divisores.", resposta: `const numero = Number(prompt("Número positivo:"));
for (let divisor = 1; divisor <= numero; divisor++) {
  if (numero % divisor === 0) console.log(divisor);
}` },
    { id: "A04-Q30", nivel: "intermediario", enunciado: "Leia um número inteiro e calcule a soma de todos os seus divisores, exceto ele próprio. Exemplo: para 66, 1 + 2 + 3 + 6 + 11 + 22 + 33 = 78.", resposta: `const numero = Number(prompt("Número inteiro:"));
let soma = 0;
for (let divisor = 1; divisor < numero; divisor++) {
  if (numero % divisor === 0) soma += divisor;
}
alert("Soma dos divisores: " + soma);` },
    { id: "A04-Q31", nivel: "intermediario", enunciado: "Some todos os números naturais abaixo de 1000 que são múltiplos de 3 ou de 5.", resposta: `let soma = 0;
for (let numero = 1; numero < 1000; numero++) {
  if (numero % 3 === 0 || numero % 5 === 0) soma += numero;
}
alert("Soma: " + soma);` },
    { id: "A04-Q32", nivel: "intermediario", enunciado: "Leia o valor inicial e o valor final de um intervalo e some os números ímpares contidos nele. Se o valor inicial for maior que o final, mostre \"Intervalo de valores inválido\".", resposta: `const inicio = Number(prompt("Valor inicial:"));
const fim = Number(prompt("Valor final:"));
if (inicio > fim) {
  alert("Intervalo de valores inválido");
} else {
  let soma = 0;
  for (let numero = inicio; numero <= fim; numero++) {
    if (numero % 2 !== 0) soma += numero;
  }
  alert("Soma dos ímpares: " + soma);
}` },
    { id: "A04-Q33", nivel: "avancado", enunciado: "Leia o valor de um saque e mostre quantas notas de cada valor são necessárias para pagá-lo com a menor quantidade possível de notas. Use notas de 100, 50, 20, 10, 5, 2 e 1 real.", resposta: `const notas = [100, 50, 20, 10, 5, 2, 1];
let restante = Number(prompt("Valor do saque (inteiro):"));
for (let indice = 0; indice < notas.length; indice++) {
  const quantidade = Math.floor(restante / notas[indice]);
  if (quantidade > 0) console.log(quantidade + " nota(s) de R$ " + notas[indice]);
  restante = restante % notas[indice];
}` },
    { id: "A04-Q34", nivel: "facil", enunciado: "Leia dez números e mostre quantos deles estão entre 30 e 90, inclusive.", resposta: `let quantidade = 0;
for (let indice = 1; indice <= 10; indice++) {
  const numero = Number(prompt("Número " + indice + ":"));
  if (numero >= 30 && numero <= 90) quantidade++;
}
alert("Números entre 30 e 90: " + quantidade);` },
    { id: "A04-Q35", nivel: "intermediario", enunciado: "Leia o valor da compra de 5 clientes da loja A e compare o faturamento total com o da loja B (R$ 54.000). Se a loja A faturar mais, mostre por quanto superou; caso contrário, informe se faturou menos ou o mesmo valor.", resposta: `const faturamentoB = 54000;
let faturamentoA = 0;
for (let cliente = 1; cliente <= 5; cliente++) {
  faturamentoA += Number(prompt("Compra do cliente " + cliente + ":"));
}
if (faturamentoA > faturamentoB) alert("A loja A superou a loja B em R$ " + (faturamentoA - faturamentoB).toFixed(2));
else if (faturamentoA < faturamentoB) alert("A loja A faturou menos que a loja B");
else alert("As lojas tiveram o mesmo faturamento");` },
    { id: "A04-Q36", nivel: "intermediario", enunciado: "Exiba uma tabela de descontos: compras de R$ 500 têm 1% e cada R$ 100 a mais soma 1 ponto percentual, até 25%. Em cada linha mostre valor da compra, desconto e valor final.", resposta: `let valorCompra = 500;
for (let desconto = 1; desconto <= 25; desconto++) {
  const valorFinal = valorCompra * (1 - desconto / 100);
  console.log("R$ " + valorCompra.toFixed(2) + " - " + desconto + "% - R$ " + valorFinal.toFixed(2));
  valorCompra += 100;
}` },
    { id: "A04-Q37", nivel: "intermediario", enunciado: "Leia o peso e a idade de 5 pessoas. Mostre a média das idades (com uma casa decimal) e quantas pessoas pesam mais de 90 kg.", resposta: `let somaIdades = 0;
let acimaDe90 = 0;
for (let pessoa = 1; pessoa <= 5; pessoa++) {
  const peso = Number(prompt("Peso da pessoa " + pessoa + " (kg):"));
  const idade = Number(prompt("Idade da pessoa " + pessoa + ":"));
  if (peso > 90) acimaDe90++;
  somaIdades += idade;
}
alert("Média das idades: " + (somaIdades / 5).toFixed(1));
alert("Pessoas acima de 90 kg: " + acimaDe90);` }
  ]
});