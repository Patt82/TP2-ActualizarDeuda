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
function actualizar(deudas, pagos, logger) {
    
    const deudasJS = jsonToJS('./in/deudasO.json');
    const pagosJS = jsonToJS('./in/pagos.json');
    const arrCombinado = [];

    console.log(deudasJS)
    console.log(pagosJS)
}
    //Loopear pagos
 
 /*    Entrar al primer subindice del array de pagos y acceder al objeto.dni
        Loopear deudas
            Guardar el dni y buscarlo en el deudasOld
            si se encuentra
                copiar el objeto al nuevo array con la deuda actualizada

*/

function jsonToJS(ruta){
    const pagos = fs.readFileSync(ruta);
    const pagosJS = JSON.parse(pagos);   
    return pagosJS;
}

export default{
    actualizar,
    jsonToJS
}
