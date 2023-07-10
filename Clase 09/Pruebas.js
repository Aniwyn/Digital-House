let perro = {
    nombre: 'Firulais',
    edad: 6,
    vacunado: true
}

//console.log(perro.edad);

let deportista = {
    energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (cantidadHoras) {
        this.energia -= cantidadHoras * 5
        this.experiencia += cantidadHoras * 2
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

let moduloNativo = require('http')
let moduloInstalado = require('axios')
let moduloPropio = require(__dirname + 'script')