// 1. Vai printar 10 e 10, 5
// 2. Vai printar 10, 10, 10
/* 

let horasDeTrabalhoDia
let recebePorDia

O programa retorna horasDeTrabalhoDia dividido por recebePorDia para encontrar quanto ele recebe por hora.

*/

// primeiro programa

let nome 
let idade

console.log(typeof nome, typeof idade)

// Como não foi atribuido um valor o retorno será undefined

nome = prompt('Qual seu nome?')
idade = prompt('Qual sua idade?')

console.log(typeof nome, typeof idade)

// O prompt converte tudo que for digitado para string

console.log(`Olá ${nome}, você têm ${idade} anos.`)

// segundo programa

let perguntaAnimes = prompt('Você gosta de animes?')
let perguntaFilmes = prompt('Você gosta de filmes?')
let perguntaSeries = prompt('Você gosta de séries?')

let perguntasMaisRespostas = `Você gosta de animes? - ${perguntaAnimes}\nVocê gosta de filmes? - ${perguntaFilmes}\nVocê gosta de séries? - ${perguntaSeries}`

console.log(perguntasMaisRespostas)

// terceiro programa + desafio

let a = Number(prompt('Digite o primeiro número(A):'))
let b = Number(prompt('Digite o segundo número(B):'))
let c = a

a = b
b = c

console.log(`O novo valor de A é: ${a}\nO novo valor de B é: ${b}`)
console.log(`Os números somados resultam em ${a+b} e multiplicados resultam em ${a*b}.`)




