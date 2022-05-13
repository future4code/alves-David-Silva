// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const pergH = +prompt('Digite a altura')
  const pergL = +prompt('Digite a largura')
  const resultado = pergH * pergL
  return console.log(resultado)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const perg1 = +prompt('Qual é o ano atual?')
  const perg2 = +prompt('Qual é o seu ano de nascimento?')
  const resultado = perg1 - perg2
  return console.log(resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const perg1 = prompt('Qual é o seu nome?')
  const perg2 = prompt('Qual é a sua idade?')
  const perg3 = prompt('Qual é o seu e-mail?')
  console.log(`Meu nome é ${perg1}, tenho ${perg2} anos, e o meu email é ${perg3}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const perg1 = prompt('Digite sua primeira cor favorita')
  const perg2 = prompt('Digite sua segunda cor favorita')
  const perg3 = prompt('Digite sua terceira cor favorita')
  const arr = []
  arr.push(perg1)
  arr.push(perg2)
  arr.push(perg3)
  return console.log(arr)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0]
  const ultimo = array[array.length-1]
  const terceiro = primeiro
  array[0] = ultimo
  array[array.length-1] = terceiro
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const perg1 = +prompt('Digite o ano atual')
  const perg2 = +prompt('Digite seu ano de nascimento')
  const perg3 = +prompt('Digite o ano de emissão')

  const calculo1 = perg1 - perg2
  const calculo2 = perg1 - perg3
  
  const check1 = calculo1 <= 20 && calculo2 >= 5
  const check2 = calculo1 > 20 && calculo1 <= 50 && calculo2 >= 10
  const check3 = calculo1 > 50 && calculo2 >= 15

  const resultado = check1 || check2 || check3

  return console.log(resultado)  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const check1 = ano % 400 == 0
  const check2 = ano % 4 == 0 && ano % 100 != 0
  
  return check1 || check2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const perg1 = prompt('Você tem mais de 18 anos?')
  const perg2 = prompt('Você possui ensino médio completo?')
  const perg3 = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  const resposta = 'sim'
  const respostaLower = resposta.toLowerCase()

  const check = perg1 == respostaLower && perg2 == respostaLower && perg3 == respostaLower

  return console.log(check)

}