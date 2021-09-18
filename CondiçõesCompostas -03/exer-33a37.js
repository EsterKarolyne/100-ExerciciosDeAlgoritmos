//33

var valorcasa = 100000
var salario = 5000 // nao pode exeder 30% do salario na prestação mensal
var anospagos = 20*12 // 1 = 12 x = 12*anosapgos

var prestação = 1400   // x*salario

 if(prestação > (30/100) * salario){
    console.log('EMPRESTIMO NEGADO')

} else {
    console.log(`EMPRÉTIMO CONCEDIDO! será pago em ${anospagos} meses um valor de $${prestação} reais.`)
}

console.log('-------------------')
//34

var altura = 1.60
var peso = 150
var imc = peso / (altura*altura)

if( imc < 18.5){
    console.log('Abaixo do peso')

} else if( imc >= 18.5 && imc <= 25){
    console.log('Peso ideal')
} else if( imc >25 && imc <=30){
    console.log('Sobrepeso')
} else if(imc >30 && imc <=40){
    console.log('Obesidade')
} else if( imc>40){
    console.log('Obesidade mórbida')
}

console.log('-------------------')
//35
var dia = 5
var diasPop = 90*dia  
var diaslux = 150*dia

var km = 30

var totalPop1 = diasPop + (km*0.20)
var totalPop2 = diasPop + (km*0.10)

var totallux1 = diaslux + (km*0.30)
var totallux2 = diaslux + (km*0.25)

if( km <= 100){
    console.log(`Sua taxa total é de $${totalPop1} reais com carro popular`)
} else if(km > 100){
    console.log(`Sua taxa total é de $${totalPop2} reais com carro popular`)
} if(km <= 200){
    console.log(`Sua taxa total é de $${totallux1} reais com carro de luxo`)
}else if (km > 200){
    console.log(`e sua taxa total é de $${totallux2} reais com carro de luxo.`)
}

console.log('-------------------')
//36

var horasativo = 3
var horasMes = 30*horasativo


if(horasMes <= 10){
    console.log(`Sua pontuação é: ${2*horasativo} pontos, e faturou ${0.05*2*horasativo} reais`)
} else if(horasMes > 10 && horasMes<=20){
    console.log(`Sua pontuação é: ${5*horasativo} pontos e faturou ${0.05*5*horasativo} reais`)
} else if(horasMes > 20){
    console.log(`Sua pontuação é: ${10*horasativo} pontos e faturou ${0.05*10*horasativo} reais`)
}

console.log('-------------------')
//37

var salario = 3000
var sexo = 'Feminino'
var anos = 12

if(sexo == 'Feminino' && anos < 15){
    console.log(`Você é mulher, seu novo salario é de ${(5/100)*salario + salario} reais com aumento de 5% `)
} else if(sexo == 'Feminino' && anos >=15 && anos <=20){
    console.log(`Você é mulher, seu novo salario é de ${(12/100)*salario + salario} reais com aumento de 12%`)
} else if(sexo == 'Feminino' && anos > 20){
    console.log(`Você é mulher, seu novo salario é de ${(23/100)*salario + salario} reais com aumento de 23%`)
}if( sexo == 'Masculino' && anos <20 ){
    console.log(`Você é Homem, seu novo salario é de ${(3/100)*salario + salario} reais com aumento de 3%`)
}else if(sexo == 'Masculino' && anos >= 20 && anos <=30){
    console.log(`Você é Homem, seu novo salario é de ${(13/100)*salario + salario} reais com aumento de 13%`)
} else if (sexo == 'Masculino' && anos > 30){
    console.log(`Você é Homem, seu novo salario é de ${(25/100)*salario + salario} reais com aumento de 25%`)
}
