// 1

const infosPessoa = (name: string, date: string) => {
    let arrayStr: string[] = date.split("/")
    return console.log(`Olá me chamo ${name}, nasci no dia ${arrayStr[0]} de ${arrayStr[1]} de ${arrayStr[2]}`)
}

infosPessoa("David", "03/10/1991")

// 2

const tipoDaVariavel = (parameter: any) => {
    return console.log(typeof parameter)
}

tipoDaVariavel(30)

// 3

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Filme = {
    nome: string,
    ano: number,
    genero: string,
    nota?: number
}

const infosFilme = (filme: Filme) => {
    return filme
}

console.log(infosFilme({ nome: "Matrix", ano: 1999, genero: GENERO.ACAO, nota: 10 }))

// 4

type Colaboradores = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

enum Setor {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

const colaboradores: Colaboradores[] = [
    { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
    { nome: "Maria", salário: 1500, setor: "vendas", presencial: false },
    { nome: "Salete", salário: 2200, setor: "financeiro", presencial: true },
    { nome: "João", salário: 2800, setor: "marketing", presencial: false },
    { nome: "Josué", salário: 5500, setor: "financeiro", presencial: true },
    { nome: "Natalia", salário: 4700, setor: "vendas", presencial: true },
    { nome: "Paola", salário: 3500, setor: "marketing", presencial: true }
]

const colaboradoresDoMarketing = (colaboradores: Colaboradores[]) => {
    const novoArray: Colaboradores[] = colaboradores.filter((colaboradores) => {
        return colaboradores.setor === Setor.MARKETING
    })
    return novoArray
}

console.log(colaboradoresDoMarketing(colaboradores))

// 5

type Usuario = {
    nome: string,
    email: string,
    nivel: string,
}

const usuarios: Usuario[] = [
    { nome: "Rogério", email: "roger@email.com", nivel: "user" },
    { nome: "Ademir", email: "ademir@email.com", nivel: "admin" },
    { nome: "Aline", email: "aline@email.com", nivel: "user" },
    { nome: "Jéssica", email: "jessica@email.com", nivel: "user" },
    { nome: "Adilson", email: "adilson@email.com", nivel: "user" },
    { nome: "Carina", email: "carina@email.com", nivel: "admin" }
]

const admins = (usuarios: Usuario[]) => {
    const novoArray: Usuario[] = usuarios.filter((usuario) => {
        return usuario.nivel === "admin"
    })
    return novoArray
}

console.log(admins(usuarios))

// 6

type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: Cliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const saldoNegativo = (clientes: Cliente[]) => {
    clientes.map((cliente) => {
        const total = cliente.debitos.reduce((a, b) => a + b, 0)
        cliente.saldoTotal = cliente.saldoTotal - total
        cliente.debitos = []

    })
    const clientesNegativos = clientes.filter((cliente) => {
        return cliente.saldoTotal < 0
    })
    return clientesNegativos

}

console.log(saldoNegativo(clientes))

// 7
type Produtos = {
    nome: string, 
    quantidade: number, 
    valorUnitario:number | string
}

const produtos: Produtos[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ " + valorAjustado
}

const novoArmazem = (produtos:Produtos[]) =>{

    produtos.sort(function(x,y){
        let a = x.quantidade
        let b = y.quantidade
        return a - b
    }).map((produto)=>{
        produto.valorUnitario = ajustaPreco(produto.valorUnitario as number)
    })
    return produtos
}

console.log(novoArmazem(produtos))