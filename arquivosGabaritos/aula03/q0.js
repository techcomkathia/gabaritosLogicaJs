let desconto = 0;
let cor = prompt('Digite a cor da etiqueta do produto: \n Verde - 10% \n Amarelo - 20% \n Azul - 30 % \n Vermelho 40% ')
let valor = Number(prompt('Digite o valor do produto'))
let novoPreco = 0

switch (corEtiqueta) {
    case 'Verde':
        desconto = 0.1; // 10%
        break;
    case 'Amarelo':
        desconto = 0.2; // 20%
        break;
    case 'Azul':
        desconto = 0.3; // 30%
        break;
    case 'Vermelho':
        desconto = 0.4; // 40%
        break;
    default:
        console.log('Cor de etiqueta inválida');
        desconto= 0 // Retorna o preço sem desconto se a cor da etiqueta for inválida
}

novoPreco = valor * (1 - desconto)
console.log(`O valor do produto com a etiqueta ${cor} teve o valor de R$ ${valor} ajustado para ${novoPreco} `)

