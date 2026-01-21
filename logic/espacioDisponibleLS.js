// SEPARAR CADA CARACTER => MEDIR TAMAÑO DE LOS CARACTERES => MULTIPLICAR POR 2 => ANALIZAR TAMAÑO POR BYTES
// CADA CARACTER SERA CONTADO CON UN VALOR DE 2 BYTES
// MANEJAR LOCALSTORAGE COMO UN STRING
let arr = localStorage.getItem('LinksGuardados');
let baseActual = arr.split("");
let baseActualizada = baseActual.length * 2;
console.log(baseActualizada);

// DEPENDIENDO DEL PORCENTAJE LA IMAGEN DEBERA CAMBIAR
// A PARTIR DEL 80% DE USO ADVERITR AL USUARIO
// PAPU PAPU PAPU PAPU PAPU PAPU PAPU PAPU PAPU PAPU
let tamañoTotal = 5000000;
let espacioDisponible = tamañoTotal - baseActualizada;
console.log(espacioDisponible);
if (espacioDisponible > 4000000 && espacioDisponible < 5000000) {
    console.log("espacio usado: 20%");
} else if (espacioDisponible > 3000000 && espacioDisponible < 3999999) {
    console.log("espacio usado: 40%");
} else if (espacioDisponible > 2000000 && espacioDisponible < 2999999) {
    console.log("espacio usado: 60%");
} else if (espacioDisponible > 1000000 && espacioDisponible < 1999999) {
    console.log("espacio usado: 80%");
} else if (espacioDisponible > 0 && espacioDisponible < 999999) {
    console.log("espacio usado: 100%");
}