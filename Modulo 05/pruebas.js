
function tablaDeMultiplicar(numero) {
    let i = 1
    while (i <= 10) {
        console.log(numero + ' * ' + i + ' = ' + (i * numero))
        i++
    }
}

//tablaDeMultiplicar(5)
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
    ]

let aprobados = estudiantes.filter(function (estudiante) {
    return estudiante.aprobado
})

let desaprobados = estudiantes.filter(function (estudiante) {
    return !estudiante.aprobado
})

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function (horarios) {
    return horarios + 1
})

let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function (acumulador, vuelta) {
    return acumulador + vuelta
})

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function (item) {
    console.log(item);
})

