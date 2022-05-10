// Exercícios de interpretação de código

// 1.

// a - false
// b - false
// c - true
// d - boolean

// 2.

// O prompt precisa ser convertido para number senão a string será apenas concatenada. Por exemplo '5' + '5' = '55'.

// 3.

// Colocar o valor prompt dentro de Number()

// Exercícios de escrita de código

// 1.

let pergIdade = Number(prompt('Qual sua idade?'))

let pergIdadeAmigo = Number(prompt('Qual a idade do seu melhor amigo ou sua melhor amiga?'))

let compararIdade = pergIdade > pergIdadeAmigo

let respostaDaComp = `Sua idade é maior do que a dele(a)? ${compararIdade}.`

let diferencaIdade = pergIdade - pergIdadeAmigo

let respostaDif = `A diferença de idade entre vocês é de ${Math.abs(diferencaIdade)} ano(s).`

console.log(respostaDaComp)
console.log(respostaDif)

// 2.

let pergPar = Number(prompt('Digite um número par:'))

console.log(pergPar % 2)

// Utilizar o mol de um número por 2 é ótimo para verificar se o número é par ou ímpar. Resto 0 significa que é par e 1 é ímpar.

// 3. 

let idadeMeses = pergIdade * 12
let idadeDias = pergIdade * 365
let idadeHoras = pergIdade * 8760

let contaIdade = `Você têm aproximadamente ${idadeMeses} meses, ${idadeDias} dias e ${idadeHoras} horas de vida.`

console.log(contaIdade)

// 4.

let pergNumero1 = Number(prompt('Digite um número:'))

let pergNumero2 = Number(prompt('Digite outro número:'))

let eMaior = `O primeiro numero é maior que segundo? ${pergNumero1 > pergNumero2}`

let eIgual = `O primeiro numero é igual ao segundo? ${pergNumero1 == pergNumero2}`

let eDivisivel = `O primeiro numero é divisível pelo segundo? ${(pergNumero1 % pergNumero2) == 0}`

let eDivisivel2 = `O segundo numero é divisível pelo primeiro? ${(pergNumero2 % pergNumero1) == 0}`

console.log(eMaior)
console.log(eIgual)
console.log(eDivisivel)
console.log(eDivisivel2)









