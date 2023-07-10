let number1 = 2
let number2 = 3
let operation = 'dividir'

switch (operation.toLowerCase()) {
    case 'sumar':
        console.log(`El resultado de sumar ${number1} + ${number2} es ${number1 + number2}`)
        break
    case 'restar':
        console.log(`El resultado de restar ${number1} - ${number2} es ${number1 - number2}`)
        break
    case 'multiplicar':
        console.log(`El resultado de multiplicar ${number1} * ${number2} es ${number1 * number2}`)
        break
    case 'dividir':
        console.log(`El resultado de dividir ${number1} / ${number2} es ${number1 / number2}`)
        break
    default:
        console.log('Las operaciones aceptadas son: sumar - restar - multiplicar - dividir');
}
