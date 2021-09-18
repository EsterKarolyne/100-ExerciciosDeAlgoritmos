// 21

var ano = 2049
var div = ano % 4 && ano % 400
if(div == 0){
    console.log(`O ano de ${ano} é bissexto `)

} else{
    console.log(`O ano de ${ano} não é bissexto`)
}

console.log('-------------------')
//22
 var nascimento = 1999
 var atual = 2021
 var validação = atual - nascimento 
 var pass = validação - 18
 if(validação < 18){
     var idade = pass*-1
     console.log(`Voce ainda não pode mais se alistar, faltam ${idade} anos`)

 }else if(validação > 18){
     console.log(`Você não pode mais alistar, ja se passaram ${pass} anos`)

   
 }else if(validação = 18){
     console.log(`SE ALISTE AO EXÉRCITO BRASILEIRO!`)

 }
 console.log('-------------------')
 //23

var nome = "Ester"
var sexo = 'Feminino'

var compraF = 1000 
var compraFDES =  compraF - (13/100)*compraF
var compraM = 1000
var compraMDES = compraM - (5/100)*compraM

if(sexo == 'Feminino'){
    console.log(`Você é a ${nome} e sua compra fica $${compraFDES} reais com desconto`)
} else if(sexo == 'Masculino') {
    console.log(`Você é 0 ${nome}e sua compra fica $${compraMDES} reais com desconto`)
}
console.log('-------------------')
//24

var distancia = 300
if( distancia < 200){
    var passagem1 = 0.5*distancia
    console.log(`Sua passagem custa $${passagem1} reais`)
} else if( distancia > 200){
    var passagem2 = 0.45*distancia
    console.log(`Sua passagem custa $${passagem2} reais`)
}

console.log('-------------------')
//25

lado1 = 2
lado2 = 3
lado3 = 2

if( lado3 < lado1 + lado2 && lado2 < lado1 + lado3 && lado1 < lado3+lado2){
    console.log(`É um triângulo`)

} else{
    console.log(`Não é um triângulo`)
}