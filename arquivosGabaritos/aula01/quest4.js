//Leia o lado de um quadrado e calcule sua área. (Lembrando que a área é lado ao quadrado)

let lado = prompt('Digite o lado do quadrado (apenas numeros)')
lado = Number(lado)

area = lado ** 2

//ou area = lado * lado

alert('a area do quadrado é ' + area) // para o usuário
console.log('a area do quadrado é ' + area) // para os desenvolvedores