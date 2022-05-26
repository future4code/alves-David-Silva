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

const blackjackDavidHenrique = ()=>{   
   
   primeiraMaoDavid = comprarCarta()
   segundaMaoDavid = comprarCarta()
   totalMaoDavid = primeiraMaoDavid.valor + segundaMaoDavid.valor
   textoDavid = console.log(`Minha primeira carta é: ${primeiraMaoDavid.texto} e o valor dela é: ${primeiraMaoDavid.valor}\nMinha segunda carta é: ${segundaMaoDavid.texto} e o valor dela é: ${segundaMaoDavid.valor}\n--------------------------\nMinha pontuação foi de: ${totalMaoDavid}\n--------------------------`)
   
   primeiraMaoUsuario = comprarCarta()
   segundaMaoUsuario = comprarCarta()
   totalMaoUsuario = primeiraMaoUsuario.valor + segundaMaoUsuario.valor
   textoUsuario = console.log(`Sua primeira carta é: ${primeiraMaoUsuario.texto} e o valor dela é: ${primeiraMaoUsuario.valor}\nSua segunda carta é: ${segundaMaoUsuario.texto} e o valor dela é: ${segundaMaoUsuario.valor}\n------------------------\nSua pontuação foi de: ${totalMaoUsuario}\n------------------------`)
   
   if (totalMaoDavid > totalMaoUsuario) {
      console.log('Eu ganhei! hahahaha! :)')
   } else if (totalMaoDavid < totalMaoUsuario) {
      console.log('Você ganhou! Sorte de principiante!')
   } else {
      console.log('Empatamos! Vamos outra?')
   }
}

let confirmar = confirm('Você deseja iniciar uma partida?')

if(confirmar){
   blackjackDavidHenrique()
} else {
   console.log('Partida cancelada.')
}














