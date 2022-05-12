// Exercícios de interpretação de código

/* 

1.

a - indefinido
b - null
c - 11
d - 3
e - trocou para 19
f - 9

2.

SUBI NUM ONIBUS EM MIRROCOS, 27

*/

//Exercícios de escrita de código

// 1.

let perguntas = [prompt('Qual seu e-mail?'), prompt('Qual seu nome?')]

console.log(`Olá ${perguntas[1]}, o e-mail ${perguntas[0]} foi cadastrado!`)

// 2.

let comidas = ['Arroz', 'Feijão', 'Batata', 'Aveia', 'Pão']

let pergUser = prompt('Qual sua comida favorita?')

comidas[1] = pergUser

//comidas.splice(1, 1, pergUser)

console.log(`Essas são as minhas comidas favoritas:\n${comidas.join('\n')}`)

// 3.

let listaDeTarefas = []

listaDeTarefas.push(prompt('Digite uma tarefa que você precisa realizar hoje'))
listaDeTarefas.push(prompt('Digite outra tarefa que você precisa realizar hoje'))
listaDeTarefas.push(prompt('Digite mais uma tarefa que você precisa realizar hoje'))

console.log(listaDeTarefas.join('\n'))

let pergRemove = prompt('Digite de 1 a 3, na ordem que você digitou anteriormente, qual tarefa você deseja não fazer hoje:')

listaDeTarefas.splice(pergRemove-1, 1)

console.log(listaDeTarefas.join('\n'))

// Desafios

let frase = "Eu adoro codar"

let desafio1 = frase.split(' ')

console.log(desafio1)

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let indOf = frutas.indexOf('Abacaxi')

let desafio2 = `Index de abacaxi é: ${indOf} e o array tem ${frutas.length} elementos.`

console.log(desafio2)



