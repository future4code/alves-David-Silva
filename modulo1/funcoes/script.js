// Exercícios de interpretação de código

/* 
1.

a - 10, 50
b - Só não seria impresso no console

2.

a - Ela verifica se uma palavra se encontra no texto. Você pode reutilizar essa função para verificar sempre que quiser algo no texto.
b - true, true, false

*/

// Exercícios de escrita de código

let minhasInfos = () => console.log('Eu sou David, tenho 30 anos, moro em Salvador e sou estudante.')

minhasInfos()

let tempStringFunc = (nome, idade, cidade, profissao) => console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

tempStringFunc('David', 30, 'Salvador', 'estudante')

let soma = (n1, n2) => console.log(n1 + n2)

soma(5, 10)

let comparacao = (n1, n2) => console.log(n1 >= n2)

comparacao(4, 8)

let parOuImpar = (n1, n2) => console.log(n1 % n2 == 0)

parOuImpar(10,5)

let string = (txt) => console.log(`${txt.length}, ${txt.toUpperCase()}`)

string('Um mundo de fantasia')

let pergUser1 = +prompt('Digite um número')
let pergUser2 = +prompt('Digite outro número')

let somaUser = (n1, n2) => console.log(n1 + n2)
let subUser = (n1, n2) => console.log(n1 - n2)
let multUser = (n1, n2) => console.log(n1 * n2)
let divUser = (n1, n2) => console.log(n1 / n2)

somaUser(pergUser1, pergUser2)
subUser(pergUser1, pergUser2)
multUser(pergUser1, pergUser2)
divUser(pergUser1, pergUser2)

// Desafio

// 1.

let funcConsole = (p1) => console.log(p1)
let numFunc = (n1, n2) => funcConsole(n1+n2)

numFunc(5,10)

// 2.

let pitagoras = (n1,n2) => console.log(Math.sqrt((n1**2)+(n2**2)))

pitagoras(3,4)









