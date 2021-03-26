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
    let idxD = 0;
    let idxP = 0;
    
    //Loopear pagos
    while(idxD < deudas.length){
        if(deudas[idxD].dni === )

        
    }
    Entrar al primer subindice del array de pagos y acceder al objeto.dni
        Loopear deudas
            Guardar el dni y buscarlo en el deudasOld
            si se encuentra
                copiar el objeto al nuevo array con la deuda actualizada

    
    
    
    
    while (idxA < arrA.length || idxB < arrB.length) {
        if (idxA >= arrA.length) {
            arrCombinado.push(arrB[idxB])
            idxB++
        } else if (idxB >= arrB.length) {
            arrCombinado.push(arrA[idxA])
            idxA++
        } else if (arrA[idxA] < arrB[idxB]) {
            arrCombinado.push(arrA[idxA])
            idxA++
        } else if (arrB[idxB] < arrA[idxA]) {
            arrCombinado.push(arrB[idxB])
            idxB++
        } else {
            arrCombinado.push(arrA[idxA])
            idxA++
            idxB++
        }
    }
    return arrCombinado
}

function jsonToJS(ruta){
    const pagos = fs.readFileSync(ruta);
    const pagosJS = JSON.parse(pagos);   
    return pagosJS;
}

export {
    actualizar
}
