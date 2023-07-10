let precios = {
    html5 : 4000,
    css3 : 5000,
    javascript : 10000,
    react : 7000,
    nodejs : 15000
}

let cursos = ['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'NODEJS']

function sumarPrecios(precios, cursos) {
    let montoTotal = 0
    for(let i = 0; i < cursos.length; i++) {
        montoTotal += precios[cursos[i].toLowerCase()]
    }
    return montoTotal
}

function calcularMonto(firstName, lastName, precios, cursos, callback) {
    let text = `Estimado ${firstName} ${lastName}, en función de los cursos seleccionados:`
    for(let i = 0; i < cursos.length; i++) {
        text = text.concat(`\n${i+1}.- ${cursos[i]}`)
    }
    text = text.concat(`\nEl monto total a pagar es de: $${callback(precios, cursos)}.`)
    return text
}

let calculo = calcularMonto('Luis', 'Fuentes', precios, cursos, sumarPrecios)
console.log(calculo);