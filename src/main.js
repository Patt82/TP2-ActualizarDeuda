//NO MODIFICAR EL MAIN!
import fs from 'fs'

import ap from './utils/apareoConActualizacion.js'
import ac from './utils/actualizarDeudas.js'


const rutaDeudasOld = './in/deudasOLD.json'
const rutaPagos = './in/pagos.json'
const rutaDeudasNew = './out/deudasNEW.json'
const rutaLog = './out/notificaciones.log'

//ap.actualizarArchivosDeudas(rutaDeudasOld, rutaPagos, rutaDeudasNew, rutaLog)
function jsonToJS(ruta){
    const pagos = fs.readFileSync(ruta);
    const pagosJS = JSON.parse(pagos); 

    //return pagosJS;
   // console.log(pagosJS);
    return pagosJS;
}
const pagosJS = jsonToJS('./in/pagos.json');

const deudas = jsonToJS('./in/deudasOLD.json');

console.log("Estas son las deudas ",deudas);
console.log("Estos son los pagos ", pagosJS)
/* const deudasJS = jsonToJS('./in/deudasO.json');

const arrCombinado = [];

console.log(deudasJS)
//console.log(pagosJS) */