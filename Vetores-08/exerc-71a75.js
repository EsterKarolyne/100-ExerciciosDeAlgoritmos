//71
var arr = [];

for (var item = 0; item < 8; item++) {
  arr.push(999);
}
console.log(arr);

console.log("--------------");
//72
var arr5 = [];
for (var valor = 5; valor <= 50; valor = valor + 5) {
  arr5.push(valor);
}
console.log(arr5);

console.log("--------------");
//73

var arr1 = [];
for (var v = 9; v >= 0; v = v - 1) {
  arr1.push(v);
}
console.log(arr1);

console.log("--------------");
//74

var arrRepeat = [];

for (var r = 0; r < 5; r++) {
  arrRepeat.push(5);
  arrRepeat.push(3);
}
console.log(arrRepeat);

console.log("--------------");
//75

var arrF = [];
var termo = 15;
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


