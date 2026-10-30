window.bancoAulas = window.bancoAulas || [];
window.bancoAulas.push({
  id: "aula03",
  numero: "03",
  titulo: "Repetição com while",
  resumo: "Explore laços while, contadores, acumuladores, validação de dados e menus repetidos.",
  questoes: [
    { id: "A03-Q01", nivel: "facil", enunciado: "Use while para exibir os números de 1 a 10.", resposta: `let numero = 1;
while (numero <= 10) {
  console.log(numero);
  numero++;
}` },
    { id: "A03-Q02", nivel: "facil", enunciado: "Leia um limite e some todos os números de 1 até esse limite.", resposta: `const limite = Number(prompt("Limite:"));
let numero = 1;
let soma = 0;
while (numero <= limite) {
  soma += numero;
  numero++;
}
alert("Soma: " + soma);` },
    { id: "A03-Q03", nivel: "facil", enunciado: "Leia um limite e exiba todos os números pares de 0 até ele.", resposta: `const limite = Number(prompt("Limite:"));
let numero = 0;
while (numero <= limite) {
  console.log(numero);
  numero += 2;
}` },
    { id: "A03-Q04", nivel: "facil", enunciado: "Leia números até que o usuário digite 0 e conte quantos números diferentes de zero foram informados.", resposta: `let numero = Number(prompt("Número (0 encerra):"));
let quantidade = 0;
while (numero !== 0) {
  quantidade++;
  numero = Number(prompt("Número (0 encerra):"));
}
alert("Quantidade: " + quantidade);` },
    { id: "A03-Q05", nivel: "facil", enunciado: "Peça uma senha e repita a pergunta enquanto ela for diferente de 1234.", resposta: `let senha = prompt("Digite a senha:");
while (senha !== "1234") {
  senha = prompt("Senha incorreta. Tente novamente:");
}
alert("Acesso permitido");` },
    { id: "A03-Q06", nivel: "facil", enunciado: "Leia um número e exiba sua tabuada de 1 a 5 usando while.", resposta: `const numero = Number(prompt("Número:"));
let multiplicador = 1;
while (multiplicador <= 5) {
  console.log(numero + " x " + multiplicador + " = " + numero * multiplicador);
  multiplicador++;
}` },
    { id: "A03-Q07", nivel: "intermediario", enunciado: "Leia um número inteiro não negativo e calcule seu fatorial com while.", resposta: `const numero = Number(prompt("Número não negativo:"));
let atual = 1;
let fatorial = 1;
while (atual <= numero) {
  fatorial *= atual;
  atual++;
}
alert("Fatorial: " + fatorial);` },
    { id: "A03-Q08", nivel: "intermediario", enunciado: "Leia um limite e some os múltiplos de 3 entre 1 e esse limite.", resposta: `const limite = Number(prompt("Limite:"));
let numero = 3;
let soma = 0;
while (numero <= limite) {
  soma += numero;
  numero += 3;
}
alert("Soma dos múltiplos: " + soma);` },
    { id: "A03-Q09", nivel: "intermediario", enunciado: "Leia notas até receber -1 e calcule a média das notas válidas.", resposta: `let nota = Number(prompt("Nota (-1 encerra):"));
let soma = 0;
let quantidade = 0;
while (nota !== -1) {
  soma += nota;
  quantidade++;
  nota = Number(prompt("Nota (-1 encerra):"));
}
if (quantidade > 0) alert("Média: " + (soma / quantidade).toFixed(2));
else alert("Nenhuma nota informada");` },
    { id: "A03-Q10", nivel: "intermediario", enunciado: "Peça uma nota até que o valor digitado esteja entre 0 e 10, inclusive.", resposta: `let nota = Number(prompt("Nota entre 0 e 10:"));
while (nota < 0 || nota > 10) {
  nota = Number(prompt("Inválida. Digite uma nota entre 0 e 10:"));
}
alert("Nota registrada: " + nota);` },
    { id: "A03-Q11", nivel: "intermediario", enunciado: "Crie um menu que se repita até escolher 0: 1 exibe 'Olá', 2 exibe a data atual.", resposta: `let opcao = -1;
while (opcao !== 0) {
  opcao = Number(prompt("1 - Olá | 2 - Data | 0 - Sair"));
  switch (opcao) {
    case 1: alert("Olá!"); break;
    case 2: alert(new Date().toLocaleDateString()); break;
    case 0: alert("Até mais!"); break;
    default: alert("Opção inválida");
  }
}` },
    { id: "A03-Q12", nivel: "intermediario", enunciado: "Leia uma palavra e conte quantas vogais ela possui usando while.", resposta: `const palavra = prompt("Palavra:").toLowerCase();
const vogais = "aeiouáéíóúãõâêô";
let indice = 0;
let quantidade = 0;
while (indice < palavra.length) {
  if (vogais.includes(palavra[indice])) quantidade++;
  indice++;
}
alert("Vogais: " + quantidade);` },
    { id: "A03-Q13", nivel: "avancado", enunciado: "Leia um inteiro maior que 1 e determine se ele é primo usando while.", resposta: `const numero = Number(prompt("Inteiro maior que 1:"));
let divisor = 2;
let primo = numero > 1;
while (divisor <= Math.sqrt(numero) && primo) {
  if (numero % divisor === 0) primo = false;
  divisor++;
}
alert(primo ? "Primo" : "Não primo");` },
    { id: "A03-Q14", nivel: "avancado", enunciado: "Leia dois inteiros positivos e calcule o máximo divisor comum pelo algoritmo de Euclides.", resposta: `let a = Number(prompt("Primeiro inteiro positivo:"));
let b = Number(prompt("Segundo inteiro positivo:"));
while (b !== 0) {
  const resto = a % b;
  a = b;
  b = resto;
}
alert("MDC: " + a);` },
    { id: "A03-Q15", nivel: "avancado", enunciado: "Gere um número aleatório de 1 a 20 e peça tentativas até acertar, informando se cada palpite é maior ou menor.", resposta: `const secreto = Math.floor(Math.random() * 20) + 1;
let palpite = Number(prompt("Adivinhe (1 a 20):"));
while (palpite !== secreto) {
  if (palpite < secreto) alert("O número é maior");
  else alert("O número é menor");
  palpite = Number(prompt("Tente novamente:"));
}
alert("Acertou!");` },
    { id: "A03-Q16", nivel: "avancado", enunciado: "Leia um número entre 1 e 100, repetindo a pergunta enquanto estiver fora do intervalo.", resposta: `let numero = Number(prompt("Digite um número de 1 a 100:"));
while (!Number.isInteger(numero) || numero < 1 || numero > 100) {
  numero = Number(prompt("Inválido. Digite um inteiro de 1 a 100:"));
}
alert("Número aceito: " + numero);` },
    { id: "A03-Q17", nivel: "avancado", enunciado: "Crie um menu de caixa: 1 deposita, 2 consulta saldo, 0 encerra. Inicie o saldo em zero.", resposta: `let saldo = 0;
let opcao = -1;
while (opcao !== 0) {
  opcao = Number(prompt("1 - Depositar | 2 - Saldo | 0 - Sair"));
  if (opcao === 1) {
    const valor = Number(prompt("Valor do depósito:"));
    if (valor > 0) saldo += valor;
    else alert("Valor inválido");
  } else if (opcao === 2) alert("Saldo: R$ " + saldo.toFixed(2));
  else if (opcao !== 0) alert("Opção inválida");
}` },
    { id: "A03-Q18", nivel: "avancado", enunciado: "Leia inteiros até -1 e informe o maior e o menor valor digitado, sem considerar o sentinela.", resposta: `let numero = Number(prompt("Inteiro (-1 encerra):"));
let maior = null;
let menor = null;
while (numero !== -1) {
  if (maior === null || numero > maior) maior = numero;
  if (menor === null || numero < menor) menor = numero;
  numero = Number(prompt("Inteiro (-1 encerra):"));
}
if (maior === null) alert("Nenhum valor informado");
else alert("Maior: " + maior + " | Menor: " + menor);` },
    { id: "A03-Q19", nivel: "facil", enunciado: "Use while para mostrar uma contagem regressiva de 10 até 0 e, ao final, a mensagem \"FIM!\".", resposta: `let contador = 10;
while (contador >= 0) {
  console.log(contador);
  contador--;
}
console.log("FIM!");` },
    { id: "A03-Q20", nivel: "facil", enunciado: "Declare uma variável iniciada em 0 e incremente-a de 1000 em 1000, mostrando seu valor até chegar a 100000.", resposta: `let valor = 0;
while (valor <= 100000) {
  console.log(valor);
  valor += 1000;
}` },
    { id: "A03-Q21", nivel: "intermediario", enunciado: "Leia um inteiro maior que zero e use while para somar seus algarismos (251 resulta em 2 + 5 + 1 = 8). Se o número não for um inteiro maior que zero, mostre \"Número inválido\".", resposta: `const numero = Number(prompt("Inteiro maior que zero:"));
if (!Number.isInteger(numero) || numero <= 0) {
  alert("Número inválido");
} else {
  let restante = numero;
  let soma = 0;
  while (restante > 0) {
    soma += restante % 10;
    restante = Math.floor(restante / 10);
  }
  alert("Soma dos algarismos: " + soma);
}` },
    { id: "A03-Q22", nivel: "avancado", enunciado: "Gere um número aleatório de 1 a 1000 e peça palpites até o usuário acertar, informando a cada tentativa se o chute é menor ou maior que o número gerado. Ao final, mostre em quantas tentativas o número foi descoberto.", resposta: `const secreto = Math.floor(Math.random() * 1000) + 1;
let palpite = Number(prompt("Adivinhe o número (1 a 1000):"));
let tentativas = 1;
while (palpite !== secreto) {
  if (palpite < secreto) alert("Seu chute é menor que o número gerado");
  else alert("Seu chute é maior que o número gerado");
  palpite = Number(prompt("Tente novamente:"));
  tentativas++;
}
alert("Acertou em " + tentativas + " tentativas!");` },
    { id: "A03-Q23", nivel: "intermediario", enunciado: "Chico tem 1,50 m e cresce 2 cm por ano; Zé tem 1,10 m e cresce 3 cm por ano. Calcule quantos anos serão necessários para que Zé seja maior que Chico.", resposta: `// Alturas em centímetros evitam erros de arredondamento com decimais.
let chico = 150;
let ze = 110;
let anos = 0;
while (ze <= chico) {
  chico += 2;
  ze += 3;
  anos++;
}
alert("Zé será maior que Chico em " + anos + " anos");` },
    { id: "A03-Q24", nivel: "avancado", enunciado: "Um funcionário foi contratado em 1995 com salário de R$ 2.000. Em 1996 recebeu aumento de 1,5% e, a partir de 1997, cada aumento percentual é o dobro do anterior. Use while para calcular o salário em 2000.", resposta: `let salario = 2000;
let percentual = 1.5;
let ano = 1996;
while (ano <= 2000) {
  salario += salario * percentual / 100;
  percentual *= 2;
  ano++;
}
alert("Salário em 2000: R$ " + salario.toFixed(2));` },
    { id: "A03-Q25", nivel: "facil", enunciado: "Use while para exibir os números pares de 0 a 10 e, ao final, mostrar quantos pares foram exibidos e a soma deles.", resposta: `let numero = 0;
let quantidade = 0;
let soma = 0;
while (numero <= 10) {
  console.log(numero);
  quantidade++;
  soma += numero;
  numero += 2;
}
console.log("Quantidade de pares: " + quantidade + " | Soma: " + soma);` },
    { id: "A03-Q26", nivel: "intermediario", enunciado: "Leia a cor da etiqueta de um produto e repita a pergunta enquanto ela não for Verde, Amarelo, Azul ou Vermelho. Depois leia o preço e aplique o desconto com switch: Verde 10%, Amarelo 20%, Azul 30%, Vermelho 40%.", resposta: `let cor = prompt("Cor da etiqueta (Verde, Amarelo, Azul ou Vermelho):");
while (cor !== "Verde" && cor !== "Amarelo" && cor !== "Azul" && cor !== "Vermelho") {
  cor = prompt("Cor inválida. Digite Verde, Amarelo, Azul ou Vermelho:");
}
const preco = Number(prompt("Preço do produto:"));
let desconto;
switch (cor) {
  case "Verde": desconto = 0.10; break;
  case "Amarelo": desconto = 0.20; break;
  case "Azul": desconto = 0.30; break;
  case "Vermelho": desconto = 0.40; break;
}
alert("Preço com desconto: R$ " + (preco * (1 - desconto)).toFixed(2));` }
  ]
});