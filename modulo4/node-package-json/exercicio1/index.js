/* 
a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?

R: Utilizamos o process.argv[2 ou mais]
*/

console.log(`Olá ${process.argv[2]}! você têm ${process.argv[3]} anos.`)
console.log(`Você terá ${+(process.argv[3]) + 7} daqui a 7 anos.`)