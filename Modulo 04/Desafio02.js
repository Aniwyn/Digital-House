const ingredientPrices = {
    Jamon : 30,
    Queso : 25,
    salsaDeTomate : 5,
    Mayonesa : 5,
    Mostaza : 5,
    Tomate : 15,
    Lechuga : 10,
    Cebolla : 10,
    carneparrilla : 1800,
    pollo : 1500,
    vegetariana : 1200
}

function calculatePrice (tipoMedallon, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let hamburgerPrice = ingredientPrices[tipoMedallon.toLowerCase()]

    hamburgerPrice += jamon ? ingredientPrices['Jamon'] : 0
    hamburgerPrice += queso ? ingredientPrices['Queso'] : 0
    hamburgerPrice += salsa ? ingredientPrices['salsaDeTomate'] : 0
    hamburgerPrice += mayonesa ? ingredientPrices['Mayonesa'] : 0
    hamburgerPrice += mostaza ? ingredientPrices['Mostaza'] : 0
    hamburgerPrice += tomate ? ingredientPrices['Tomate'] : 0
    hamburgerPrice += lechuga ? ingredientPrices['Lechuga'] : 0
    hamburgerPrice += cebolla ? ingredientPrices['Cebolla'] : 0
    
    return hamburgerPrice
}

function reportPrice (nombre, apellido, tipoMedallon, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla, callback) {
    let price = callback(tipoMedallon, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla)
    return price ? `Estimado ${nombre} ${apellido}, el monto a pagar es de: $${price}` : 'Error, valores invalidos.'
}

let tipoMedallon = 'PoLlO'
let jamon = true
let queso = true
let salsa = true
let mayonesa = true
let mostaza = true
let tomate = true
let lechuga = true
let cebolla = true

console.log(reportPrice('Roberto', 'Musso', tipoMedallon, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla, calculatePrice))