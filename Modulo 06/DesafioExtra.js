/*
En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función que
desarrolles.
1. Crear una función que pida un valor por parámetro y muestre los 10 números
siguientes.
2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el
100.
4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase.
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2.
*/

function mostrarDiez(num) {
    console.log(`Numero original: ${num}`);
    for(let i = 1; i <= 10; i++) {
        console.log(`Siguiente numero: ${num + i}`);
    }
}

//mostrarDiez(17)

function contar57() {
    let i = 1;
    while (i <= 57) {
        console.log(`${i}`);
        i += 3
    }
}

//contar57()

function sumatoria100() {
    let sum = 0
    for(let i = 1; i <= 100; i++) {
        sum += i
    }
    console.log(`El valor de la sumatoria es: ${sum}`);
}

//let n = 100;
//let suma = (n * (n + 1)) / 2;

//let suma = 0;
//let numero = 1;
//
//while (numero <= 100) {
//    suma += numero;
//    numero++;
//}
//
//console.log("La suma es asd: " + suma);

//sumatoria100()

function letrasMayusculas(text) {
    for(let i = 0; i < text.length; i++) {
        console.log(`${text[i].toUpperCase()}`);
    }
}

//letrasMayusculas('practicando el uso de los ciclos o bucles')
function devolverPares(array) {
    let arrayPares = []
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayPares.push(array[i])
        }
    }
    return arrayPares
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12]
let resultado = devolverPares(array)
console.log(resultado);