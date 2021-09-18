//83
var arr = [];

for (var a = 0; a <= 20; a++) {
    var numero = parseInt(Math.random() * 99);
    arr.push(numero);   
}
console.log(arr);

arr.sort((a,b) => a - b)
console.log(arr)

console.log("----------------");
// 84

var nome = [ 'Miguel',
    'Arthur',
    'Heitor',
    'Helena',
    'Alice',
    'Theo',
    'Davi',
    'Laura',
    'Gabriel',
]
 
var idade = [17,30,4,1,9,44,22,7,10]

idade.forEach(function (item, indice) {
    if(item < 16){
        

        nome.forEach(function (nome, nomeIndice) {
            if(indice == nomeIndice){
                console.log("Os menores de idade são:" + item + " anos - " + nome)
            }

        })


    }

    

})
