//26

const arr = [1,3,77,88,33,90,120]
const min = Math.min(...arr)
const max = Math.max(...arr)
console.log( `O menor valor é ${min}`)
console.log( `O maior valor é ${max}`)

console.log('-------------------')
//27

var nota1 = 10
var nota2 = 6
var media = (nota1 + nota2)/2

if(media <= 4.9){
    console.log(`Sua média é ${media}, logo: REPROVADO!`)

} else if (media>5 && media < 6.9){
    console.log(`Sua média é ${media}, logo: RECUPERAÇÃO!`)
} else if(media >= 7){
    console.log(`Sua media é ${media}, logo: APROVADO!`)
}

console.log('-------------------')
//28

var comprimento = 100
var largura = 90
var area = comprimento * largura
if(area < 100 ){
    console.log('Terreno Popular')
}else if(area >100 && area < 500){
    console.log('Terreno Master')
} else if(area >= 500){
    console.log('Terreno VIP')
}

console.log('-------------------')
//29

var nome = 'Lucas'
var salario = 1200
var aumento1 = salario + (3/100)*salario
var aumento2 = salario + (12.5/100)*salario
var aumento3 = salario + (20/100)*salario
var anos = 9

if( anos <= 3 ){
    console.log(`Seu novo salario com 3% de aumento é ${aumento1}`)
} else if( anos > 3 && anos < 10){
    console.log(`Seu novo salario com 12.5% de aumento é ${aumento2}`)
} else if( anos >= 10){
    console.log(`Seu novo salario com 20% de aumento é ${aumento3}`)
}

console.log('-------------------')
//30

lado1 = 6
lado2 = 3
lado3 = 6

if( lado3 < lado1 + lado2 && lado2 < lado1 + lado3 && lado1 < lado3+lado2){
    console.log(`É um triângulo`)

     if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1){
        console.log('Triângulo Equilátero')

    } else if(lado1 == lado2 || lado3 == lado2 || lado1 == lado3 ){
        console.log('Triângulo Isósceles')

    } else if (lado1 != lado2 && lado3 != lado1){
        console.log('Triângulo Escaleno')
    }

} else{
    console.log(`Não é um triângulo`)
    }



