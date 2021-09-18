//17
var vel = 90
if(vel>80){
    var multa = (vel-80)*5
    console.log(`Voce foi multado! ultrapassou a velocidade de 80km/h sua multa é de $${multa} reais`)

}else{
    console.log('Dirija com segurança!')
}

console.log('-------------------')
//18

var AnoNasc = 2001
var year = 2021
var votar = year - AnoNasc
if(votar < 16){
    console.log(`Você é menor de idade e não pode votar, pois voce tem ${votar} anos.`)

} else if( votar > 16 && votar < 18  ){
    console.log(`Seu voto é opcional, pois voce tem ${votar} anos.`)

}else{
    console.log(`Seu voto é obrigatório, pois voce tem ${votar} anos.`)
}

console.log('-------------------')
//19
 var nome = 'Victor'
 var nota1 = 8
 var nota2 = 8
 var media = (nota1+nota2)/2
 if(media>7){
     console.log(`O aluno ${nome} foi aprovado com ${media} pontos`)

 } else{
     console.log(`REPROVADO com média ${media}, menor que 7`)
 }

 console.log('-------------------')
 //20

 var numero = 3
 var res = numero % 2 
 if(res == 0){ 
     console.log(`O Número ${numero} é par`)

 }else{
     console.log(`O Número ${numero} é ímpar`)
 }

 