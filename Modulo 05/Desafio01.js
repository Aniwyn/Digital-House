function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let electrodomesticos = ['Microondas', 'Lavaropas', 'Tostadora', 'Cafetera', 'Licuadora', 'Pava electrica']

console.log(electrodomesticos[getRandomInt(6)])

let electrodomestico = electrodomesticos.shift()
electrodomesticos.push(electrodomestico)

electrodomesticos.push('Batidora', 'Multiprocesadora')

console.log(electrodomesticos.length);

//toSearch = 'Freidora'
toSearch = 'Microondas'

electrodomesticos.includes(toSearch) ? console.log('Producto encontrado') : console.log('El producto buscado no existe')

let text = electrodomesticos.join(' ')
console.log(text);
console.log(text.length);
text.replace('Lavaropas', 'Secaropas')

console.log(text);
