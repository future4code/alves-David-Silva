alert('Bem vindo(a) ao Blackjack de David Henrique!')

const blackjackDavidHenrique = () => {

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

   let cartasUsuario = () => maoUsuario.map(e => e.texto).join(' ')
   let cartasDavid = () => maoDavid.map(e => e.texto).join(' ')
   let pontuacaoUsuario = () => maoUsuario.map(e => e.valor).reduce((p, a) => p + a, 0)
   let pontuacaoDavid = () => maoDavid.map(e => e.valor).reduce((p, a) => p + a, 0)

   let continuarComprando = true

   while (continuarComprando) {

      msgDeCompraRevelada = confirm(`Suas cartas são: ${cartasUsuario()}\nSua pontuação é: ${pontuacaoUsuario()}\nMinha carta revelada é: ${maoDavid[0].texto}\nVocê gostaria de comprar uma carta?`)

      while (pontuacaoDavid() < pontuacaoUsuario()) {
         maoDavid.push(comprarCarta())
      }

      if (msgDeCompraRevelada) {
         maoUsuario.push(comprarCarta())
         alert(`Você recebeu: ${maoUsuario[maoUsuario.length - 1].texto}`)
      } else {
         continuarComprando = false
      }

      if (pontuacaoUsuario() > 21) {
         alert(`Suas cartas ${cartasUsuario()} ultrapassam 21 pontos.`)
         continuarComprando = false
      }
   }

   alert(`Sua pontuação: ${cartasUsuario()} = ${pontuacaoUsuario()}\nMinha pontuação: ${cartasDavid()} = ${pontuacaoDavid()}`)

   if ((pontuacaoUsuario() > pontuacaoDavid()) && (pontuacaoUsuario() < 22) || pontuacaoUsuario() < 22 && pontuacaoDavid() > 21) {
      alert('Você ganhou!')
   } else if (pontuacaoUsuario() == pontuacaoDavid() || pontuacaoDavid() > 21 && pontuacaoUsuario() > 21) {
      alert('Empatamos!')
   } else if (pontuacaoUsuario() < pontuacaoDavid() && pontuacaoDavid() < 22 || pontuacaoUsuario() > 22 && pontuacaoDavid() < 21) {
      alert('Você perdeu!')
   }
}

let confirmar = confirm('Você deseja iniciar uma partida?')

if (confirmar) {
   blackjackDavidHenrique()
} else {
   alert('Partida cancelada.')
}
