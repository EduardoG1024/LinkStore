// SEPARAR CADA CARACTER => MEDIR TAMAÑO DE LOS CARACTERES => MULTIPLICAR POR 2 => ANALIZAR TAMAÑO POR BYTES
// CADA CARACTER SERA CONTADO CON UN VALOR DE 2 BYTES
// MANEJAR LOCALSTORAGE COMO UN STRING
export function getUsedStorage () {
    let arr = localStorage.getItem('LinksGuardados');
    let baseActual = arr.split("");
    let baseActualizada = baseActual.length * 2;

    // DEPENDIENDO DEL PORCENTAJE LA IMAGEN DEBERA CAMBIAR
    // A PARTIR DEL 80% DE USO ADVERITR AL USUARIO
    // PAPU PAPU PAPU PAPU PAPU PAPU PAPU PAPU PAPU PAPU
    let tamañoTotal = 5000000; // 5 MILLONES
    let espacioDisponible = tamañoTotal - baseActualizada;
    let porcentaje // PORCENTAJE ALERTA

    function knowSpace () {
        if (espacioDisponible > 4000000 && espacioDisponible < 5000000) {
            porcentaje = '20%';
        } else if (espacioDisponible > 3000000 && espacioDisponible < 3999999) {
            porcentaje = '40%';
        } else if (espacioDisponible > 2000000 && espacioDisponible < 2999999) {
            porcentaje = '60%';
        } else if (espacioDisponible > 1000000 && espacioDisponible < 1999999) {
            porcentaje = '80%';
        } else if (espacioDisponible > 0 && espacioDisponible < 999999) {
            porcentaje = '100%';
        }
        return porcentaje;
    }
    alert('Espacio Usado: ' + knowSpace());
}
