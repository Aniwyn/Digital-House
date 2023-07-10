let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick',
                 'Elvis', 'Thor: amor y trueno']

function peliculaMasVendida(pelicula) {
    let indice = peliculas.indexOf(pelicula)
    if (indice != -1) {
        let peliculaBuscada = peliculas[indice]
        peliculas.splice(indice, 1);
        peliculas.unshift(peliculaBuscada.toUpperCase())
    } else {
        console.log('Pelicula no encontrada')
    }
    return peliculas
}

peliculas = peliculaMasVendida('Thor: amor y trueno')
//console.log(peliculas);

let peliculasProximas = ['Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar']
peliculasProximas.shift()

function unirListas(lista1, lista2) {
    return lista1.concat(lista2)
}

console.log(unirListas(peliculas, peliculasProximas));