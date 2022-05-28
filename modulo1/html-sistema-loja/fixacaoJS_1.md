```
~~~javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {    
    let salarioFixo = 2000
    let comissaoFixa = 100 * qtdeCarrosVendidos
    let comissaoCarro = valorTotalVendas * 0.05
    let salarioFinal = salarioFixo + comissaoFixa + comissaoCarro
    return salarioFinal   
   }
~~~   
```