// Exercícios de interpretação de código

// 1. a - Matheus Nachtergaele, Virginia Cavendish, {canal: "Globo", horario: "14h"}

// 2. a - Objeto cachorro, objeto gato com espalhamento do objeto cachorro porém com nome alterado, objeto tartaruga com espalhamento do objeto gato com o nome alterado e a letra a sendo substituida pela letra o.
//    b - Copia o objeto referenciado

// 3. a - false e undefined
//    b - Ele acessou através do colchete/string e adicionou uma nova chave mas sem nenhum valor.

//Exercícios de escrita de código

const pessoa = {
    nome: 'David',
    apelido: ['Panda', 'dd', 'dê']
}

function funcaoMensagem(novoObjeto) {
    const mensagemPessoa = { ...novoObjeto }
    return `Eu sou ${mensagemPessoa.nome}, mas pode me chamar de: ${mensagemPessoa.apelido[0]}, ${mensagemPessoa.apelido[1]} ou ${mensagemPessoa.apelido[2]}.`

}

console.log(funcaoMensagem(pessoa))

const novaPessoa = {
    ...pessoa,
    apelido: ['Savior', 'Kamei', 'Suno']
}

console.log(funcaoMensagem(novaPessoa))

const dados = {
    nome: 'David',
    idade: '30',
    profissao: 'estudante'
}

const dados2 = {
    nome: 'Kamei',
    idade: '120',
    profissao: 'sacerdote'
}

function funcaoArray(objeto) {

    const array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]

    return console.log(array)
}

funcaoArray(dados)
funcaoArray(dados2)


let carrinho = []

const banana = {
    nome: 'Banana',
    disponibilidade: true
}

const morango = {
    nome: 'morango',
    disponibilidade: true
}

const uva = {
    nome: 'uva',
    disponibilidade: true
}

function minhaFuncao(fruta) {
    return carrinho.push(fruta)
}

minhaFuncao(banana)
minhaFuncao(morango)
minhaFuncao(uva)

console.log(carrinho)

function perguntaUsuario() {
    let pergunta1 = prompt('Qual seu nome?')
    let pergunta2 = prompt('Qual sua idade?')
    let pergunta3 = prompt('Qual sua profissão?')

    let objetoDasPerguntas = {
        nome: pergunta1,
        idade: pergunta2,
        profissao: pergunta3
    }
    let tipoDoObjeto = typeof objetoDasPerguntas

    return console.log(objetoDasPerguntas, tipoDoObjeto)
}
perguntaUsuario()

function filmes(ano1,nome1,ano2,nome2){
    let mensagem1 = `${nome1} foi lançado antes de ${nome2}? ${ano1 < ano2}`
    let mensagem2 = `${nome1} foi lançado no mesmo ano de ${nome2}? ${ano1 == ano2}`
    return console.log(`${mensagem1}\n${mensagem2}`)
}

let filme1 = {
    nome: 'Batman',
    ano: 2022
}

let filme2 = {
    nome: 'Vingadores',
    ano: 2010
}

filmes(filme1.ano,filme1.nome,filme2.ano,filme2.nome)

function inversaoDeEstoque(fruta){
    let inverter = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
    }
    return console.log(inverter)
}

inversaoDeEstoque(morango)

