//Exercícios de interpretação de código

/* 

1.  a - Ele verifica o módulo por 2 do número impresso
    b - Números pares
    c - Números ímpares
    
2.  a - Imprimir o valor da fruta inserida
    b - O preço da fruta Maçã é R$ 2.25
    c - O preço da fruta Pêra é R$ 5

3.  a - Solicitando ao user um número e convertando a string digitada para number
    b - Esse número passou no teste / nada seria impresso
    c - A mensagem não consegue ser acessada fora do escopo da função

*/

// Exercícios de escrita de código

// 1.

const idadeDoUsuario = 17//+prompt('Qual sua idade?')

const podeDirigir = (idade) => { if(idade >= 18){console.log('Você pode dirigir!')} else {console.log('Você não pode dirigir!')}

}

podeDirigir(idadeDoUsuario)

// 2.

const turnoDoEstudante = 'N'//prompt('Qual seu turno?').toUpperCase()

const saudacao = (turno) => {
    if(turno == 'M'){
        console.log('Bom dia!')
    } else if (turno == 'V') {
        console.log('Boa tarde!')
    } else if (turno == 'N'){
        console.log('Boa noite!')
    } else {
        console.log('Turno não encontrado')
    }
}

saudacao(turnoDoEstudante)

// 3.

const saudacaoSwitch = (turno) => {
    switch (turno) {
        case 'M':
            console.log('Bom dia!')
            break
        case 'V':
            console.log('Boa tarde!')
            break
        case 'N':
            console.log('Boa noite!')
            break
        default:
            console.log('Turno não encontrado')
            break
   }
}

saudacaoSwitch(turnoDoEstudante)

// 4.

const perguntaGenero = 'fantasia'//prompt('Qual o gênero do filme?').toLowerCase()

const perguntaPreco = 10//+prompt('Qual o preço do ingresso?')

const condicaoParaAssistir = (genero,preco) => {
    if (genero == 'fantasia' && preco <= 15){
        let lanchinho = 'salgadinho'//prompt('Qual lanche você vai levar?')
        return console.log(`Bom filme e aproveite seu ${lanchinho}`)
    } else {
        console.log('Escolha outro filme :(')
    }
}

condicaoParaAssistir(perguntaGenero,perguntaPreco)

// Desafio

// 1. feito

// 2. 

const nomeUsuario = prompt('Qual seu nome?')
const tipoDeJogo = prompt('Qual o topo de jogo? IN indica internacional; e DO indica doméstico;').toUpperCase()
const etapaDoJogo = prompt('Qual etapa do jogo? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final').toUpperCase()
const categoriaDoJogo = +prompt('Qual a categoria? pode ser as opções 1, 2, 3 ou 4')
const qtdDeIngressos = +prompt('Qual a quantidade de ingressos?')

const sF_Preco = [1320,880,550,220]
const dT_Preco = [660,440,330,170]
const fI_Preco = [1980,1320,880,330]



const mensagem = () => {
    if (tipoDeJogo == 'DO' && etapaDoJogo == 'SF'){
        return console.log(`Olá ${nomeUsuario}, o ingresso escolhido custa R$${sF_Preco[categoriaDoJogo-1]},00 reais e o preço total da sua compra fica no valor de R$${sF_Preco[categoriaDoJogo-1] * qtdDeIngressos},00 reais.`)
    } else if (tipoDeJogo == 'DO' && etapaDoJogo == 'DT'){
        return console.log(`Olá ${nomeUsuario}, o ingresso escolhido custa R$${dT_Preco[categoriaDoJogo-1]},00 reais e o preço total da sua compra fica no valor de R$${dT_Preco[categoriaDoJogo-1] * qtdDeIngressos},00 reais.`)
    } else if (tipoDeJogo == 'DO' && etapaDoJogo == 'FI'){
        return console.log(`Olá ${nomeUsuario}, o ingresso escolhido custa R$${fI_Preco[categoriaDoJogo-1]},00 reais e o preço total da sua compra fica no valor de R$${fI_Preco[categoriaDoJogo-1] * qtdDeIngressos},00 reais.`)
    } else if (tipoDeJogo == 'IN' && etapaDoJogo == 'SF'){
        return console.log(`Olá ${nomeUsuario}, o ingresso escolhido custa R$${(sF_Preco[categoriaDoJogo-1] * 4.1).toFixed(2)} reais e o preço total da sua compra fica no valor de R$${(sF_Preco[categoriaDoJogo-1] * qtdDeIngressos * 4.1).toFixed(2)} reais.`)
    } else if (tipoDeJogo == 'IN' && etapaDoJogo == 'DT'){
        return console.log(`Olá ${nomeUsuario}, o ingresso escolhido custa R$${(dT_Preco[categoriaDoJogo-1] * 4.1).toFixed(2)} reais e o preço total da sua compra fica no valor de R$${(dT_Preco[categoriaDoJogo-1] * qtdDeIngressos * 4.1).toFixed(2)} reais.`)
    } else if (tipoDeJogo == 'IN' && etapaDoJogo == 'FI'){
        return console.log(`Olá ${nomeUsuario}, o ingresso escolhido custa R$${(fI_Preco[categoriaDoJogo-1] * 4.1).toFixed(2)} reais e o preço total da sua compra fica no valor de R$${(fI_Preco[categoriaDoJogo-1] * qtdDeIngressos * 4.1).toFixed(2)} reais.`)
    } else return console.log('As informações não conferem, tente novamente.')
}

mensagem()