import mpl from './mensajesParaLoguear.js'
import fs from 'fs'
/**
 * @callback loggerCallback
 * @param {string} error error message to display
 */

/**
 * realiza el apareo con actualizacion entre deudas y pagos, y loguea algunos eventos relevantes.
 * @param {Object[]} deudas las deudas originales
 * @param {Object[]} pagos los pagos a aplicar
 * @param {loggerCallback} logger funcion a la cual llamar en caso de necesitar loguear un evento
 * @returns {Object[]} las deudas actualizadas
 */

/**
 * Con el tema del log voy a tener que escribir en un documento con las erramientas esas fs...
 * ● Si aparece un registro de pago con un dni que no coincide con el de ninguna deuda, ese
registro no se procesa, y se debe loguear como operación inválida.ESTÁ

● Si aparece un registro de pago que coincide con una deuda en su dni pero no en su
apellido, el mismo no se procesa, y se deben loguear ambos, la deuda y el pago. ESTÁ

 ●Si un registro de deuda no posee pagos asociados, se agrega directamente al array
actualizado, sin cambios. FALTA

 ●Si luego de aplicar todos los pagos correspondientes a una deuda, ésta aun
queda en positivo, se agrega al array actualizado con el nuevo importe.



 */
function actualizar(deudas, pagos, logger) {
    const arrCombinado = [];
    let dniPagoNoCoincide = [];
    const deudasJS = jsonToJS('./in/deudasO.json');
    const pagosJS = jsonToJS('./in/pagos.json');
    console.log(deudasJS);
    console.log(pagosJS);

    deudasJS.forEach((deuda, x) => {

        pagosJS.forEach((pago, i) => {
            if (deuda.dni) {

            }
        });
    });



}


function jsonToJS(ruta) {
    const pagos = fs.readFileSync(ruta);
    const pagosJS = JSON.parse(pagos);
    return pagosJS;
}

export default {
    actualizar,
    jsonToJS
}
