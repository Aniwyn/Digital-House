let peliculas = require('./pelicula')

function determinarGenero(genero) {
    switch (genero) {
        case 1:
            return 'Acción'
        case 2:
            return 'Animación'
        case 3:
            return 'Aventuras'
        case 4:
            return 'Comedia'
        case 5:
            return 'Suspenso'
        default:
            return 'Genero no valido'
    }
}

peliculas.forEach(pelicula => {
    console.log(`\nID pelicula: ${pelicula.id}`)
    console.log(`Calificación: ${pelicula.rating}`)
    console.log(`Premios: ${pelicula.awards}`)
    console.log(`Duración: ${pelicula.length}hs`)
    console.log(`Precio: $${pelicula.price}`)
    console.log('Generos:')
    pelicula.genre.forEach(genero => console.log('\t' + determinarGenero(genero)))
})

const fs = require('fs')
const path = './mensaje.txt'
let mensaje = fs.readFileSync(path, 'utf-8')

console.log(mensaje);

console.log(`\nID pelicula: ${pelicula.id}`)
console.log(`Calificación: ${pelicula.rating}`)
console.log(`Premios: ${pelicula.awards}`)
console.log(`Duración: ${pelicula.length}hs`)
console.log(`Precio: $${pelicula.price}`)
console.log('Generos:')