// Exercícios de interpretação de código
/* 

1. a - Vai iterar cada elemento do array e imprimir o array inteiro 3 vezes.

2. a - Vai imprimir uma nova array modificada apenas com os nomes da array original.

3. a - Vai imprimir um novo array com os elementos que nao possuem a string Chijo

*/

// Exercícios de escrita de código

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomesDoguinhos = console.log(pets.map((i)=>i.nome))

 const dogSalsicha = console.log(pets.filter(((i)=>i.raca == 'Salsicha')))

 const arrMsgPoodles = []
 const msgPoodles = pets.filter((i)=>{
     if(i.raca == 'Poodle'){
         return arrMsgPoodles.push(`Você ganhou um cupom de desconto de 10% para tosar o/a ${i.nome}!`)
     }
    }
)
console.log(arrMsgPoodles)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const apenasNomes = produtos.map(i=>i.nome)
console.log(apenasNomes)

 const nomeEDesconto = produtos.map(i => {
    novoObjeto = {nome:i.nome,preco:(i.preco-i.preco*0.05).toFixed(2)} 
    return novoObjeto
 })
 console.log(nomeEDesconto)

 const apenasBebidas = produtos.filter(i => i.categoria == 'Bebidas')
 console.log(apenasBebidas)

 const apenasYpe = produtos.filter(i => {
     temYpe = i.nome.includes('Ypê')
     return temYpe
 })
 console.log(apenasYpe)

 const compreYpe = apenasYpe.map(i => {
     msg = `Compre ${i.nome} por apenas ${i.preco}`
     return msg
 })
 console.log(compreYpe)

 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const nomeOrdemAlfabetica = pokemons.map(i => i.nome).sort()
console.log(nomeOrdemAlfabetica)

const apenasTipos = pokemons.map(i => i.tipo)
const setApenasTipos = new Set(apenasTipos)
console.log(setApenasTipos)

 

