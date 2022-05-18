/* Exercícios de interpretação de código

    1. Está fazendo um loop e somando os números. 10.

    2. 

    a. Os números maiores que 18
    b. Sim, remover o if e imprimir a variavel número.

    3. Imprimiria 4 linhas de asteriscos */

// Exercícios de escrita de código
// 1.
const exercicio1 = () => {

    let perguntaBichinhos = +prompt('numero bixos')

    if (perguntaBichinhos == 0) {
        console.log('que pena')
    }

    let i = 0
    let array = []

    while (i < perguntaBichinhos) {
        i++
        if (perguntaBichinhos > 0) {

            let nomesOk = prompt('nomes')
            array.push(nomesOk)

        }
    }

    if (array.length > 0) {
        console.log(array)
    }
}
//exercicio1() //chamada primeiro exercício

// 2.
const exercicio2 = () => {
    const arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90]

    // Resposta item a.
    for (let i of arrayOriginal) {
        console.log(i)
    }

    // Resposta item b.
    for (let i of arrayOriginal) {
        let divisao = i / 10
        console.log(divisao)
    }

    // Resposta item c.
    const novaArray = []
    for (let i of arrayOriginal) {
        if (i % 2 == 0) {
            novaArray.push(i)
        }
    }
    console.log(novaArray)

    // Resposta item d.
    for (let i of arrayOriginal) {
        console.log(`O elemento do index ${arrayOriginal.indexOf(i)} é ${i}.`)
    }

    // Resposta e.
    const numeroMaxMin = console.log(`O maior número da array é ${Math.max(...novaArray)} e o menor é ${Math.min(...novaArray)}.`)
}
//exercicio2() //chamada segundo exercício

// Desafios

// 1.
const desafio1 = () => {
    let numeroUsuario = Number(prompt("Digite um numero entre 1 e 100:"))
    let vamosJogar = console.log('Vamos jogar!')
    let numeroAdivinhado = Number(prompt("Agora adivinhe o numero:"))
    let i = 0
    while (numeroAdivinhado !== numeroUsuario) {

        if (numeroAdivinhado > numeroUsuario) {
            console.log(`O número chutado foi ${numeroAdivinhado}`)
            console.log("Tudo isso? Tente um pouco menos...")
            numeroAdivinhado = Number(prompt("Tudo isso? Tente um pouco menos..."))
        } else if (numeroAdivinhado < numeroUsuario) {
            console.log(`O número chutado foi ${numeroAdivinhado}`)
            console.log("Um pouco mais Leônidas...")
            numeroAdivinhado = Number(prompt("Um pouco mais Leônidas..."))
        }
        i++
    }
    return console.log(`--------\nAcertou!\n--------\nVocê tentou ${i + 1} vezes.`)
}
//desafio1() //chamada primeiro Desafio

//2.
const desafio2 = () => {
    let alerta = alert('Vamos jogar!')
    let numeroRandom = Math.floor((Math.random() * 100) + 1)
    let vamosJogar = console.log('Vamos jogar!')
    let numeroAdivinhado = Number(prompt("Olá humano, eu gerei um número aleatório entre 1 e 100, te desafio a adivinhar que número foi esse:"))
    let i = 0
    while (numeroAdivinhado !== numeroRandom) {

        if (numeroAdivinhado > numeroRandom) {
            console.log(`O número chutado foi ${numeroAdivinhado}`)
            console.log("Tudo isso? Tente um pouco menos...")
            numeroAdivinhado = Number(prompt("Tudo isso? Tente um pouco menos..."))
        } else if (numeroAdivinhado < numeroRandom) {
            console.log(`O número chutado foi ${numeroAdivinhado}`)
            console.log("Um pouco mais Leônidas...")
            numeroAdivinhado = Number(prompt("Um pouco mais Leônidas..."))
        }
        i++
    }
    return console.log(`--------\nAcertou!\n--------\nVocê tentou ${i + 1} vezes.`)
}
//desafio2() //chamada segundo Desafio

//Reflexão, foi tranquilo, só alterei uma variável.