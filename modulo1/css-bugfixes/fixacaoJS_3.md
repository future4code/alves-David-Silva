```
function calculaNota(ex, p1, p2) {
  peso1 = ex
  peso2 = p1 * 2
  peso3 = p2 * 3
  notaFinal = ( peso1 + peso2 + peso3 ) / 6
  if(notaFinal >= 9){
    return 'A'
  }else if(notaFinal < 9 && notaFinal >= 7.5){
    return 'B'
  }else if(notaFinal < 7.5 && notaFinal >= 6){
    return 'C'
  }else return 'D'
}
```