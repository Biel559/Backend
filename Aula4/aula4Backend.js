// Exercício 1
/*var frase = 'Hoje eu tomei Creatina'
console.log('comprimento:', frase.length)
console.log('em letras maiúsculas:', frase.toUpperCase()) */

// Exercício 2
/*var nulo = null
var indefinida = undefined

console.log(nulo)
console.log(indefinida)
*/

// Exercício 3
/*var numero = 12
var texto = "Bom dia"
var verdade = true

console.log(`${numero} ${texto} ${verdade}`) */

// Exercício 4
/*
var numero = 59
var texto = "559"

texto = Number(texto)
numero = numero.toString()

console.log("tipo da variável texto:",typeof(texto))
console.log("tipo da varíavel numero:",typeof(numero)) */

// Exercício 5

/*var texto = "  Hoje o dia está lindo  "

console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.slice(1,9))
console.log(texto.trim()) */

// Exercício 6
/*var saldo = 1000
var deposito = 300
var saque = 250

var operação ="depósito"

if (operação == "depósito"){
saldo = saldo + deposito
console.log("Operação de depósito foi realizada com sucesso, foi depositado R$",deposito," na sua conta ficando com um saldo de R$", saldo)
}

operação = "saque"
if (operação == "saque"){
saldo = saldo - saque
console.log("Operação de saque foi realizada com sucesso, foi sacado R$",saque," na sua conta ficando com um saldo de R$", saldo)
} */

// Exercício 7

/*var numero = 559

numero%2 == 0 ? console.log("É par"): console.log("É ímpar") */

// Exercício 8

/*var logado = true
var administrador = true

if (logado && !administrador){
    console.log("O usuário está logado e não é um administrador")
}
else if (logado && administrador){
    console.log("O usuário está logado e é um administrador")
}
else if(!logado){
 console.log("O usuário não está logado")
} */

 // Exercício 9
/*
 verdadeiro = true
 falso = false

 if(verdadeiro || falso){
    console.log("uma delas é verdadeira")
 }
 else{
    console.log("nenhuma é verdadeira")
 }*/

// Exercício 10

/* var idadeUsuario = 25
var idadeMinima = 18

if(idadeUsuario >= idadeMinima){
    console.log("O usuário tem idade o suficiente")
}
else{
    console.log("O usuário não tem idade o suficiente")
} */

// Exercício 11 

/*var nome = "Gabriel"

function saudacao (){
    console.log("Saudação meu amigo/a",nome)
}

saudacao() */

// Exercício 12

/*
var idade = 20

function deMaior (idade){
    if (idade>= 18){
        return console.log("É de maior")
    }else{
        return console.log("É de menor")
    }
}

deMaior(idade) */

// Exercício 13

/* texto = "radar"
function palindromo (){
    if (texto === texto.split("").reverse().join("")){
        console.log("É palindromo")
    }else{
        console.log("Não é palindromo")
    }
}
palindromo()  */

// Exercício 14

/* function maior(a,b,c){
    if (a>b && a>c){
      return  console.log(a,"é o maior número")
    }
    else if (b>c && b>a){
      return  console.log(b,"é o maior número")
    }
    else if (c>a && c>b){
     return   console.log(c,"é o maior número")
    }
    else{
     return   console.log("Temos números com valores iguais")
    }
}

maior(5,8,3) */

// Exercício 15
/* function calculaPotencia(base, expoente){
 return console.log(base,"elevado a",expoente,"é igual a:" ,base**expoente)
}

calculaPotencia(4,3)  */