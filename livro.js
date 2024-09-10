// Exercício 5
 
/* livro = {
    título: null,
    autor: null,
    anoPublicacao: null,
    genero: null
}
livro.título = "Livro do Gabriel Campopiano Rosa"
livro.autor = "Gabriel Campopiano Rosa"
livro.anoPublicacao = 2030
livro.genero = "Ficção Científica"
 
console.log(livro) */
 
// Exercício 8
 
const anoAtual = new Date().getFullYear()
 
livro = {
    título: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoDePublicação: 1943,
    gênero: "Ficção/Fábula"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
livro.avaliacao = null
 
if(livro.avaliacao === null){
    livro.avaliacao = "Muito Bom"
}else if (livro.avaliacao != null){
    console.log("Esse livro já tem avaliação")
}
 
console.log(livro)