function alquiler (tipoVehiculo, dias, sillaBebe) {
    let montoDia
    switch (tipoVehiculo.toLowerCase()) {
        case 'compacto':
            montoDia = 14000
            break
        case 'mediano':
            montoDia = 17000
            break
        case 'camioneta':
            montoDia = 28000
            break
        default:
            return 'Error'
    }
    montoDia += sillaBebe ? 1200 : 0
    return montoDia * dias
}

let tipoVehiculo = 'compacto'
let dias = 2
let sillaBebe = false

montoTotal = alquiler(tipoVehiculo, dias, sillaBebe)
console.log(montoTotal);