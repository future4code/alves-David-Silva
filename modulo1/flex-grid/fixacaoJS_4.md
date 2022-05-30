```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let filtrar = arrayDeNumeros.filter(e => e == numeroEscolhido)
  let quantidade = filtrar.length
  if(quantidade > 0){
    return `O número ${numeroEscolhido} aparece ${quantidade}x`
  }  else return "Número não encontrado"
}
```