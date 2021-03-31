import act from './actualizarDeudas.js'
import fs from 'fs'
/**
 * recibe las rutas del archivo de deudas original, archivo de pagos, archivo de deudas con las actualizaciones, y archivo de log para registrar errores o advertencias.
 * @param {string} rutaDeudasOld
 * @param {string} rutaPagos
 * @param {string} rutaDeudasNew
 * @param {string} rutaLog
 */
function actualizarArchivosDeudas(rutaDeudasOld, rutaPagos, rutaDeudasNew, rutaLog) {
    const pagos = jsonToJS(rutaPagos);
    const deudas = jsonToJS(rutaDeudasOld);

    let deudasNew = act.actualizar(deudas, pagos, (error, response) => {
        if (error){
            console.log(error)
        }else {
            // fs.appendFile(rutaLog, response)
            console.log(response)
        }
    });
    
    let deJsAJSON = JSON.stringify(deudasNew);
    console.log(typeof deJsAJSON);

    // fs.appendFile(rutaDeudasNew,deJsAJSON);
    console.log(deJsAJSON)

    //el resultado de la función actualizar lo tengo que convertir en json usando el rutaDeudasnew
}

function jsonToJS(ruta) {
    const pagos = fs.readFileSync(ruta);
    const pagosJS = JSON.parse(pagos);
    return pagosJS;
}

// function logger(rutaLog, dato) {
//     fs.appendFileSync(rutaLog, dato);
// }

export default {
    actualizarArchivosDeudas
}

