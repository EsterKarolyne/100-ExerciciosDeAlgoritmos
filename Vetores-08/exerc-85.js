var nome = ['Heloísa',
    'Pedro',
    'Lorenzo',
    'Sophia',
    'Maria Clara'
]
var sexo = ['Feminino', 'Masculino', 'Masculino', 'Feminino', 'Feminino']
var salario = [7000, 2500, 10000, 600, 6000]

        salario.forEach(function(itemSalario, indiceSalario){
            if(itemSalario > 5000){
                nome.forEach(function (itemNome, indiceNome){
                    if(indiceNome == indiceSalario){
                        console.log("A Pessoa que recebe mais de 5000 é: " + itemNome + " | com salario de: " + itemSalario)
                    }
                })
            }

        })


    
            

            






    

