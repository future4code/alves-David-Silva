// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse()
    let array2 = []
    array.forEach(e => {
        array2.unshift(e)
    })
    return array2
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    //return array.filter(e => e % 2 == 0)
    let array2 = []
    array.forEach(e => {
        if (e % 2 == 0) {
            return array2.push(e)
        }
    })
    return array2
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    //return array.filter(e => e % 2 == 0).map(e => e**2)
    let array2 = []
    array.forEach(e => {
        if (e % 2 == 0) {
            return array2.push(e**2)
        }
    })
    return array2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objt = {}
    objt.maiorNumero = Math.max(num1,num2)
    objt.maiorDivisivelPorMenor = Math.max(num1,num2) % Math.min(num1,num2) == 0
    objt.diferenca = Math.abs(num1 - num2)
    return objt
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    array = []
    for(let i = 0; i < n*2; i++){
        if(i % 2 == 0){
            array.push(i)
        }        
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoB == ladoC){
        return "Equilátero"
    } else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a,b) => a - b)
    segundoMaior = array[array.length-2]
    segundoMenor = array[1]
    newArr = [segundoMaior,segundoMenor]
    return newArr
    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}