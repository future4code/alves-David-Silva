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

 const nomeDosProdutos = produtos.map((i)=>i.nome)
 console.log(nomeDosProdutos)
 const desconto = produtos.map((i)=>i.preco)
 const newArr2 = [{nome: nomeDosProdutos,preco:desconto}]

 console.log(newArr2)

 

 

