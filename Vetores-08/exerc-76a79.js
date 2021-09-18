//76
var arr = [];

for (var a = 0; a <= 6; a++) {
  var numero = parseInt(Math.random() * 50);
  arr.push(numero);
}
console.log(arr);

console.log("----------------");
//77

var arrPessoas = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Hinata",
  "Shikamaru",
  "Kakashi",
  "Lee",
];
arrPessoas.reverse();
console.log(arrPessoas);

console.log("----------------");
//78

var arrNumeros = [3, 4, 80, 6, 3, 1, 89, 43, 23, 54, 66, 2, 10, 70, 94];
console.log(arrNumeros)
arrNumeros.forEach(function (item, indice) {
  if (item % 10 == 0) {
    console.log("Os numeros divisiveis por 10 são: " + item + " | A posição é: " + indice);
  }
}); 

console.log("----------------");
//79

var arrInteiros = [1,2,3,4,5,6,7,9,10]

arrInteiros.forEach(function(item, indice){
    if(item % 2 == 0){
        console.log("Os numeros divisiveis por 2 são: " + item + " | A posição é: " + indice) 
    }
})



