// Uma loja tem uma política de descontos de acordo com o valor da 
//compra do cliente. Os descontos começam acima dos R$500
// A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto
// cumulativo até 25%. Por exemplo: R$500 = 1% || R$600,00 = 2% ... etc... 
//Faça um programa que exiba essa tabela de descontos no seguinte formato:
// Valordacompra - porcentagem de desconto - valor final

//regras
let valorMinCompra = 500
let valorInicialDesconto = 1
let valorFinalDesconto = 25
let incrementoValorCompra = 100

//inicializando o valor original da compra
let compraSemDescondo = valorMinCompra

document.write(`<h1> Tabela de descontos </h1>`)
for(let desconto= valorInicialDesconto; desconto<= valorFinalDesconto; desconto++ ){
    //criando o valor da compra com desconto
    let valorComDesconto = compraSemDescondo * (1 - (desconto/100))
    //.toFixed é um método apenas para tipos numéricos ( int ou float) e recebe como parâmetro o número de casas decimais a ser aplicado
    document.write(`<p> R$ ${compraSemDescondo.toFixed(2)}  - ${desconto}% = R$ ${valorComDesconto.toFixed(2)} </p>`)

    //incrementando o valor da compra para o próximo laço
    compraSemDescondo += incrementoValorCompra
}