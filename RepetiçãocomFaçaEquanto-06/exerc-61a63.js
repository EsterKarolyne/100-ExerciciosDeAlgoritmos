//61
var resultado = ' ';
var i = 0;
do {
   i += 3;
   resultado = resultado + i;
} while (i < 30);
console.log(resultado);
console.log("acabou");

console.log('-------------------------')
//62
var user = 0
var idade = []
var maior21 = []
var media = 0

do{
   console.log("Deseja informar sua idade?")
   console.log("continuar: 1 \n sair: 2")
   var idadeescolhida = Math.floor(Math.random() * 50 + 1)
   idade.push(idadeescolhida)
   if(idadeescolhida > 21 ){
      maior21.push(idadeescolhida)
      
   }
   user++
}while(user < 10)
media = idade.reduce((t, n) => n+t, 0)/idade.length
console.log("as idades:" + idade)
console.log("a média:" + media)
console.log("os maiores de 21: " + maior21)

console.log('-------------------------')

//63
//coisa que preciso:
//pegar valores aleatorios
//armazenar é a soma
//menor valor 
//media
//valores pares
var item = 0;
var aleatorios = [];
var soma = 0
var pares = []

do{
    var valores = Math.floor(Math.random() * 50 + 1)
    aleatorios.push(valores)

    if(valores % 2 == 0){
       pares.push(valores)

    }

   item++
}while(item < 10);

const total = aleatorios.reduce((total, currentElement) => total + currentElement)
var media = aleatorios.reduce((t, n) => n+t, 0)/aleatorios.length
var min = Math.min(...aleatorios)

console.log("numeros escolhidos: " + aleatorios)
console.log("o menor numero é: " + min)
console.log("a soma total: " + total)
console.log("a media é: " + media)
console.log("os numeros pares são: " + pares)




