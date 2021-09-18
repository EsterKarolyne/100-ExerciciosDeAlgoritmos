//91
var a = 5
var b = 9
if(a > b){
    console.log("O maior número é = " + a)
} else{
    console.log("O maior número é = " + b)
}

var c = Math.max(a,b)
console.log(c)

console.log("-----------------------------")
//92

var numero = 9

if(numero % 2 == 0){
    console.log("O numero " + numero + " é par!")
} else{
    console.log("O numero " + numero + " é ímpar!")
}

console.log("-----------------------------")
//93

for(var i = 3; i <= 30; i+=3){
    console.log(i)

}

console.log("-----------------------------")
//94

var arrF = [];
var termo = 9;
var penultimo = 0,
  ultimo = 1;
var numero;

for (var countt = 1; countt <= termo; countt++) {
  numero = ultimo + penultimo;
  penultimo = ultimo;
  ultimo = numero;
  arrF.push(numero);
}
console.log(arrF);

console.log("--------------");

