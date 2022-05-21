/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo(a) ao Blackjack de David Henrique!')


let blackjackDavidHenrique = () => {

   let maoUsuario = []
   let maoDavid = []

   let duploAs = true

   while (duploAs) {
      maoUsuario.push(comprarCarta())
      maoUsuario.push(comprarCarta())
      maoDavid.push(comprarCarta())
      maoDavid.push(comprarCarta())
      if (maoUsuario[0].valor == 11 && maoUsuario[1].valor == 11 || maoDavid[0].valor == 11 && maoDavid[1].valor == 11) {
         maoUsuario = []
         maoDavid = []
      } else {
         duploAs = false
      }
   }

   let pontuacaoUsuario = () => maoUsuario.map(item => item.valor).reduce((prev, atual) => prev + atual, 0)

   let pontuacaoDavid = maoDavid[0].valor + maoDavid[1].valor

   let perguntaCompra = confirm(`Sua primeira carta foi ${maoUsuario[0].texto}, sua segunda carta foi ${maoUsuario[1].texto} e sua pontuação está em ${pontuacaoUsuario()}.\nA minha primeira carta foi ${maoDavid[0].texto}\nVocê deseja comprar outra carta?`)

   let continuarComprando = true

   while (continuarComprando) {
      if (perguntaCompra && pontuacaoUsuario() < 21) {
         maoUsuario.push(comprarCarta())
         alert(`Sua nova carta foi ${maoUsuario[maoUsuario.length - 1].texto}, sua pontuação agora é de: ${pontuacaoUsuario()}.`)
      } else if (pontuacaoUsuario < 21) {
         perguntaCompra = confirm(`sua pontuação atual é de: ${pontuacaoUsuario()}\nVocê deseja comprar mais uma carta?`)
      } else if (pontuacaoUsuario() > 21) {
         continuarComprando = false
         alert(`Como sua última carta veio ${maoUsuario[maoUsuario.length - 1].texto} você ultrapassou 21 pontos, então você perdeu essa partida.`)
         alert(`Sua pontuação ficou no total de ${pontuacaoUsuario()}.\nMinha segunda carta foi ${maoDavid[1].texto} fazendo com que minha pontuação seja de ${pontuacaoDavid}.\nPontuação final:\nVocê: ${pontuacaoUsuario()}\nEu: ${pontuacaoDavid}`)
      } else {
         continuarComprando = false
         alert(`Sua pontuação ficou no total de ${pontuacaoUsuario()}.\nMinha segunda carta foi ${maoDavid[1].texto} fazendo com que minha pontuação seja de ${pontuacaoDavid}.\nPontuação final:\nVocê: ${pontuacaoUsuario()}\nEu: ${pontuacaoDavid}`)
      }
   }

   if (pontuacaoDavid > pontuacaoUsuario()) {
      alert('Que pena, você perdeu :)')
   } else if (pontuacaoDavid < pontuacaoUsuario()) {
      alert('Parabéns, você venceu :(')
   } else {
      alert('Empatamos! Mas foi uma bela disputa :)')
   }

}

let confirmar = confirm('Você deseja iniciar uma partida?')

if (confirmar) {
   blackjackDavidHenrique()
} else {
   console.log('Partida cancelada.')
}

