//45

var inicial = 3;
var final = 10;
var passo = 2;
if(inicial > final){
    var aux = final
    final = inicial
    inicial = aux

}
//44
while (inicial <= final) {
  console.log(inicial);
  inicial = inicial + passo;
  if (inicial > final) {
    console.log("Acabou!");
  }
}

console.log('--------------------')
//46

var inicio = 6
var fim = 15
var soma = 0
while(inicio < fim){
   console.log(inicio)
  soma = soma + inicio
  inicio = inicio + 2
 
}
  console.log(`A soma é ${soma}`)

console.log('---------------------')


var i = 6
var f = 100
var s = 0

while(i <= f){
  console.log(i)
  s = s + i
  i = i + 2
}
console.log(`A soma é ${s}`)






