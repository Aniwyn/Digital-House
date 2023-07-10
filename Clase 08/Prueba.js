function sumatoriaBajoImporte (array) {
    let suma = 0
    for(let i = 0; i < array.length; i++) {
        if (array[i] <= 1000 && array[i] > 0) {
            suma += array[i]
        }
    }
    return suma
}

//console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));

function asientosDisponibles(array, chair) {
    if (array.indexOf(chair) !== -1) {
        return ('Felicitaciones, el asiento número ' + chair + ' está disponible')
    } else {
        return ('Lo sentimos, el asiento número ' + chair + ' está ocupado, pero aún quedan ' + array.length + ' asientos disponibles')
    }
}

//asientosDisponibles([3, 15, 18, 25], 25)

function reporteDePasajeros(stations) {
    let passengers = 200
    let report = ['En la estación 0 hay 200 pasajeros arriba del tren']
    for(let i = 1; i <= stations; i++) {
        passengers += i !== 5 ? 20 : 40
        report.push('En la estación ' + i + ' hay ' + passengers + ' pasajeros arriba del tren')
    }
    return report
}

//console.log(reporteDePasajeros(5));

function laClaveSecreta(array) {
    let code = ''
    let letter = ''
    for(let i = array.length - 1; i >= 0; i--) {
        letter = array[i]
        if (letter !== '*') {
            code = code.concat(letter)
        }
    }
    return code
}

let code = laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  
console.log(code); 