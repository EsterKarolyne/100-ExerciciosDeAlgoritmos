//69
var a1 = 2;
var razao = 2;
var n = 10;
var an = 20;
var decimo = a1 + (n - 1) * razao;

for (var count = a1; count <= decimo; count += razao) {
  console.log(count);
}

var somaTermos = ((a1 + an) * n) / 2;
console.log("A soma dos temos é: " + somaTermos);

console.log("--------------------");

//70
function fibonacci() {
    var termo = 10;
    var penultimo = 0,ultimo = 1;
    var numero;
    contatinho = 0;
    for (var countt = 3; countt <= termo; countt++) {
        if (termo <= 2) {
            numero = termo - 1;
            console.log(numero);
        } 
        numero = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = numero;
        console.log(numero);

    }
        
}

fibonacci();
