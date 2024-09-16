// Exercício 1

/* class Carro{
    
 constructor(marca,modelo,ano,motorligado) {
   this.marca = marca
   this.modelo = modelo   
   this.ano = ano
   this.motorligado = motorligado
 }

 ligarMotor(){
    this.motorligado = true
 }

 desligarMotor(){
    this.motorligado = false
 }
 
  stausMotor(){
    if(this.motorligado == true){
    console.log("Status do motor: Ligado")
    }
    else if(this.motorligado == false){
    console.log("Status do motor: Desligado")
    }
}
}

const carroNovo = new Carro('Chevrolet','Corsa',2012)
carroNovo.ligarMotor()
carroNovo.stausMotor()
carroNovo.desligarMotor()
carroNovo.stausMotor() */

// Exercício 2
/* class Pessoa{
    
 constructor(nome,idade,profissao,salario) {
   this.nome = nome
   this.idade = idade   
   this.profissao = profissao
   this.salario = salario
 }

 exibetrabalho(nomeempresa, tempo_de_trabalho){
    console.log("Empresa que trabalha:", nomeempresa,"\nTempo de trabalho em horas:", tempo_de_trabalho," horas")
 }
}

const pessoa1 = new Pessoa("Gabriel",18,"Programador",15000)
pessoa1.exibetrabalho("Senai", "6") */

// Exercicio 3

class Automovel{
    constructor(cor,modelo,tipCombus,qtRodas) {
        this.cor = cor
        this.modelo = modelo
        this.tipCombus = tipCombus
        this.qtRodas = qtRodas
        this.carroLigado = false
        this.vidroAberto = false
    }

    ligarCarro(){
    this.carroLigado = true    
    }

    desligarCarro(){
    this.carroLigado = false    
    }

    abri(){
    this.carroLigado = true    
    }
}