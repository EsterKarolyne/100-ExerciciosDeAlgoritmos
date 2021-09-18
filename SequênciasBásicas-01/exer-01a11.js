
//1 
var txt = 'Olá, Mundo!'
console.log(txt)

console.log('-------------------')
//2
var pergunta = 'qual é o seu nome?'
var nome = 'Ester'
console.log(`Seja bem vinda, ${nome}!`)

console.log('-------------------')
//3
var nome2 = 'Maria do Carmo'
var salario = 1850.45
console.log(`A funcionária ${nome2} teve um salário de R$ ${salario} reais em Junho.`)

console.log('-------------------')
//4
var campo1 = 8
var campo2 = 5
var res = campo1 + campo2
console.log(res)

console.log('-------------------')
//5
var nota1 = 10
var nota2 = 7
var res = (10+7) / 2
console.log(res)

console.log('-------------------')
//6
let z = 20
let ant = z-1
let suc = z+ 1
console.log( `seu antecessor é ${ant} e seu sucessor é ${suc}`)

console.log('-------------------')
//7
 var numero = 20
 var x = numero*2
 var y = numero/3
 console.log(`O dobro de 20 é ${x} e sua terça parte é ${y}`)

 console.log('-------------------')
 //8
var n = 85.7
var km = n/(1000)
var hm = n/(100)
var dam = n/(10)
var dm = n*(10)
var cm = n*(100)
var mm = n*(1000)
console.log(`o numero ${n} em metros vale ${km} km , ${hm} Hm , ${dam} Dam, ${dm} Dm, ${cm} cm e ${mm} mm`)

console.log('-------------------')
//9
var dinheiro = 100
var converter = dinheiro/5.25
console.log( `Com ${dinheiro} reais voce pode comprar ${converter} dólares em 2021`)

console.log('-------------------')
//10
var larg = 100
var alt = 8
var area = larg * alt
var tinta = area / 2
console.log(`A área da parede tem ${area} metros quadradros e precisamos de ${tinta} litros de tinta para pinta-la`)

console.log('-------------------')
//11
 var A = 2
 var B = 4
 var C = 2 
 console.log( ` A equação é ${A}.X² + ${B}.X + ${C}`)
 var delta = B**2 - 4*A*C

 if(delta < 0){
     console.log('não existe valor real')

 } else{
     var x1 = (-B+delta**(1/2)) / (2*A)
     var x2 = (-B-delta**(1/2)) / (2*A)
     console.log( `, o valor de delta é ${delta} e as raizes da equação são ${x1} e ${x2}`)

 }

