// 95
function somador(valor1, valor2){
    var soma = valor1 + valor2
    return soma
    

}

var somasoma = somador(2,3)
console.log(somasoma)

console.log("----------------")
//96

function media(a,b){
    var m = (a+b)/2
    return m
}

var mediamedia = media(8,4)
console.log(mediamedia)

console.log("----------------")
//97

function maior(numero1, numero2, numero3){
    var maiorValor = Math.max(numero1, numero2, numero3)
    return maiorValor;
}

var maiorNumero= maior(1, 2, 3)
console.log(maiorNumero + 5)

console.log("----------------")
//98



function SomaTudo(digito1, digito2){
    var adicao = 0
    for(var x = digito1; x <= digito2; x++ ){
        console.log(x)
        adicao = adicao + x


    }
    return(adicao)


}
var k = SomaTudo(15, 19)

console.log("A soma é: " + k)

console.log("----------------")
//99

function potencia(base, expoente){
    var p = base ** expoente
    return p
}

var po = potencia(5,2)
console.log(po)

console.log("----------------")
//100

function mediaa(A,B){
    var md = (A+B)/2
    return situacao(md)


}

function situacao(m){
    if(m > 5){
        return 'Aprovado!'
    } else{
        return 'Reprovado!'
    }
    
}

var mediaa = mediaa(6,2)
console.log(mediaa)

console.log("----------------")
