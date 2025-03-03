// Quando tentamos guardar múltiplos valores no armazenamento local, eles são automaticamente transformados em strings.

// Para que possamos guardar estruturas mais complexas, como arrays, precisamos transformar o a lista utilizando a formatação JSON. Tanto para que possamos guardar esses dados na memória local, quanto para que possamos eventualmente acessá-los.

//JSON.stringify()
//JSON.parse()

const friends = ['Malu', 'Agatha', 'Sami']

localStorage.setItem('friends', JSON.stringify(friends))

const values = JSON.parse(localStorage.getItem('friends'))

console.log(values[0]);

let fruits;

if (localStorage.getItem('fruits')){
    fruits = JSON.parse(localStorage.getItem('fruits'))
}
else{
    fruits = []
}

// fruits.push('grapes')

localStorage.setItem('fruits', JSON.stringify(fruits))


console.log(fruits);
