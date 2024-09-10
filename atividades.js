// Exercício 1
 
/* arrayBom = [0,1,2,3,4]
console.log(arrayBom)
arrayBom[0] = -1
console.log(arrayBom) */
 
// Exercício 2
 
/* meuArray = []
meuArray.push(1,2,3)
console.log(meuArray)
meuArray[0] = meuArray[0] * 2
console.log(meuArray) */
 
// Exercício 3
 
/* arrayDoBom = []
arrayDoBom.push(1,2,3)
console.log(arrayDoBom) */
 
// Exercício 4
 
/* clinica = []
clinica.push("Gato","Cachorro","Coelho")
console.log(clinica)
clinica = clinica.slice(1)
clinica = clinica.slice(1)
clinica = clinica.slice(1)
console.log(clinica) */
 
// Exercício 5 (Está em outro arquivo chamado livro.js como solicitado)
 
// Exercício 6
 
/* anoAtual = new Date().getFullYear()
 
livro = {
    título: "LivroLegal",
    autor: "Neymar",
    anoPublicacao: 2015,
    genero: "Esportes"
}
 
livro.idadePublicao = anoAtual - livro.anoPublicacao
 
mostrarDetalhes = livro
 
console.log(mostrarDetalhes) */
 
// Exercício 7
 
/* anoAtual = new Date().getFullYear()
 
livro = {
    título: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoDePublicação: 1954,
    gênero: "Fantasia"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
console.log("Título:", livro["título"])
console.log("Autor:", livro["autor"])
console.log("Ano de Publicação:", livro["anoDePublicação"])
console.log("Gênero:", livro["gênero"])
console.log("Idade de Publicação:", livro["idadeDePublicação"]) */
 
// Exercício 8 (Está em outro arquivo chamado livro.js como solicitado)
 
// Exercício 9
 
/* anoAtual = new Date().getFullYear()
 
livro = {
    título: "Frankenstein",
    autor: "Mary Shelley",
    anoDePublicação: 1818,
    gênero: "Ficção Científica/Gótico"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
 
livro.gênero = "Aventura"
 
console.log(livro) */
 
// Exercício 10
 
/* anoAtual = new Date().getFullYear()
 
livro = {
    título: "Moby Dick",
    autor: "Herman Melville",
    anoDePublicação: 1851,
    gênero: "Aventura/Drama",
    avaliacao: "Muito interessante"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
delete livro.avaliacao
 
console.log(livro) */
 
// Exercício 11
 
/* anoAtual = new Date().getFullYear()
 
livro = {
    título: "Frankenstein",
    autor: "Mary Shelley",
    anoDePublicação: 1818,
    gênero: "Ficção Científica/Gótico"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
livro.gênero = "Aventura"
 
console.log(livro) */
 
// Exercício 12
 
/* anoAtual = new Date().getFullYear()
 
livro = {
    título: "Drácula",
    autor: "Bram Stoker",
    anoDePublicação: 1897,
    gênero: "Horror/Gótico",
    avaliacao: "Ótima leitura"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
delete livro.avaliacao
 
console.log(livro)
 
 const pessoa = {
nome: "Bruce Banner",
dataNascimento: "25/01/1980",
carteiraIdentidade: "997776-X",
email: "profbanner@email.com",
telefone: "+552877776666",
cidade: "Cachoeiro de Itapemirim",
estado: "ES"
}
 
pessoa.cpf = "42381893709"
 
pessoa.seguroSocial = "123-45-6789"
 
function relatorio(){
    cpfRelatorio = pessoa.cpf.slice(0,4)
    carteiraIdentidadeRelatorio = pessoa.carteiraIdentidade.slice(0,4)
 
    pessoaRelatorio = pessoa
 
    pessoaRelatorio.cpf = cpfRelatorio
    pessoaRelatorio.carteiraIdentidade = carteiraIdentidadeRelatorio
 
    return console.log(pessoaRelatorio)
}
 
relatorio() */
 
// Exercício 13
 
/* estudante = {
    nome: "Gabriel Campopiano Rosa",
    matricula: 559559,
    curso: "Análise e Desenvolvimento de Sistemas",
    materias: ["Banco de dados","Front-End","Back-End","Mobile","Data Science"]
}
 
console.log(estudante) */
 
// Exercício 14 e 15 está no arquivo infoPessoa.js como solicitado
 
// Exercício 16
 
/* pessoas =
[gabriel = {
    nome: "Gabriel Campopiano Rosa",
    idade: 18,
    cidade: "Campinas"
},
eduardo = {
    nome: "Eduardo Costa de Sousa",
    idade: 18,
    cidade: "Vinhedo"
},
messi = {
    nome: "Lionel Messi",
    idade: 37,
    cidade: "Miami"
}]
 
console.log(pessoas)
 */
 
// Exercício 17
 
/* calculadora = {
    soma: function(a,b){
        return console.log(a+b)
    },
    subtracao: function(a,b){
        return console.log(a-b)
    },
    multiplicacao: function(a,b){
        return console.log(a*b)
    },
    divisao: function(a,b){
        if(b === 0 ){
            return console.log("Não é possível dividir por 0")
        }else{
            return console.log(a/b)
        }
    },
    calcularMedia: function(array){
        soma = 0
        for(let i = 0; i < array.length; i++){
            soma += array[i]
        }
        media = soma/array.length
        return console.log(media)
    }
}
 
numeros = [1,2,3,4,5,6,7]
calculadora.calcularMedia(numeros) */
 
// Exercício 18
 
contaBancaria = {
    titular: "Gabriel Campopiano Rosa",
    saldo: 50.25,
    depositar: function(deposito){
        return this.saldo += deposito
    },
    sacar: function(saque){
        if(saque>this.saldo){
            return console.log("Você não possui esse dinheiro no seu saldo bancário para fazer o saque")
        }else{
            return this.saldo -= saque
        }
    }
}
 
cliente = {
    nome: "Gabriel Campopiano Rosa",
    conta: contaBancaria
}
 
function mostrarSaldo(objeto){
    return console.log("Nome do cliente:", objeto.nome, "\nSaldo:",objeto.conta.saldo)
}
 
contaBancaria.depositar(100)
mostrarSaldo(cliente)
 
contaBancaria.sacar(80)
mostrarSaldo(cliente)