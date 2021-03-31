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
            fs.appendFileSync(rutaLog, response)
        }
    });
    
    //Conversión de objeto JS a JSON
    let deJsAJSON = JSON.stringify(deudasNew,false,4);  
    fs.writeFileSync(rutaDeudasNew,deJsAJSON);
}

//Conversion de archivo JSON a objeto JS
function jsonToJS(ruta) {
    const pagos = fs.readFileSync(ruta);
    const pagosJS = JSON.parse(pagos);
    return pagosJS;
}

export default {
    actualizarArchivosDeudas
}

