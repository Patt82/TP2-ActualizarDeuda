//NO MODIFICAR EL MAIN!
import fs from 'fs'

import ap from './utils/apareoConActualizacion.js'
import ac from './utils/actualizarDeudas.js'


const rutaDeudasOld = './in/deudasOLD.json'
const rutaPagos = './in/pagos.json'
const rutaDeudasNew = './out/deudasNEW.json'
const rutaLog = './out/notificaciones.log'

//ap.actualizarArchivosDeudas(rutaDeudasOld, rutaPagos, rutaDeudasNew, rutaLog)


function jsonToJS(ruta) {
    const pagos = fs.readFileSync(ruta);
    const pagosJS = JSON.parse(pagos);
    return pagosJS;
}
const pagosJS = jsonToJS('./in/pagos.json');
const deudas = jsonToJS('./in/deudasOLD.json');

//Esta sería la función actualizar de actualizarDeudas.js.
function actualizar() {

    //Acá guardaría todas las deudas actualizadas, que es el array 
    //que debe devolver la función según los pagos.
    const arrDeudasActualizadas = [];

    //Esta variable va a guardar los dni de todos los pagos    
    let dniPagoNoCoincide = [];

    //Esta variable va a guardar los pagos y las deudas que se encuentren
    // con dni pero no coincidan sus apellidos
    const coincideDnIPeroNoApellido = [];

    //Este array va a guardar todas las deudas actualizadas.
    let deudasNew = [];

    //Clientes con saldo a favor
    let clientesConSaldoAFavor = [];

    //Este for me va a cargar todos los pagos
    pagosJS.forEach(pagos => {
        dniPagoNoCoincide.push(pagos);
    })
    //Verifico cada pago con cada deuda.
    deudas.forEach((deuda, x) => {
        pagosJS.forEach((pago, i) => {
            if (pago.dni === deuda.dni) {
                //Si coincide el dni de la deuda con el del pago voy dejando en 0 esa posición del array 
                //para descartarlo porque conincidió y así filtrar que quede solo el que no lo hizo. 
                dniPagoNoCoincide[i] = null;
                if (pago.apellido === deuda.apellido) {
                    //Le resto el pago a la deuda
                    console.log("deuda antes de restar: ", deuda.debe);
                    console.log("pago a realizar: ", pago.pago);
                    deuda.debe -= pago.pago
                    console.log("deuda después de restar: ", deuda.debe);

                    if (deuda.debe < 0) {
                        //Me guardo los clientes que tienen saldo a favor
                        clientesConSaldoAFavor.push(pago);
                    } else {
                        deudasNew.push(deuda)
                    }
                } else {
                    //Creo un objeto para guardar las deudas y los pagos que 
                    //coincidan en el dni pero no en el apellido y lo pusheo.
                    let deudaPago = {};
                    deudaPago.Deuda = deuda;
                    deudaPago.pago = pago;
                    coincideDnIPeroNoApellido.push(deudaPago);
                    //Me guardo la deuda ya que no se pudo pagar por el problema del nombre
                    //Y la tengo que mostrar como pendiente
                    deudasNew.push(deuda);

                }
            }


        });
    });
    
    return deudasNew;
}

console.log(actualizar());


