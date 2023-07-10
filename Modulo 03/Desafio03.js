let word = 'Perro'

switch (word.toLowerCase()) {
    case 'perro':
        console.log('Su palabra traducida es: dog')
        break
    case 'gato':
        console.log('Su palabra traducida es: cat')
        break
    case 'puerta':
        console.log('Su palabra traducida es: door')
        break
    case 'ventana':
        console.log('Su palabra traducida es: window')
        break
    case 'mesa':
        console.log('Su palabra traducida es: table')
        break
    default:
        console.log('La palabra ingresada es incorrecta');
}