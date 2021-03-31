import mpl from './mensajesParaLoguear.js'

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

    //Esta variable va a guardar todos los pagos que no coinciden 
    let sinDeudaAsociada = [];
    //Esta variable va a guardar los pagos y las deudas que se encuentren
    // con dni pero no coincidan sus apellidos
    let coincideDnIPeroNoApellido = [];

    //Este array va a guardar todas las deudas actualizadas.
    let deudasNew = [];

    //Este for me va a cargar todos los pagos
    pagos.forEach(pagos => {
        sinDeudaAsociada.push(pagos);
    })

    //Verifico cada pago con cada deuda.
    deudas.forEach((deuda, x) => {
        pagos.forEach((pago, i) => {
            if (pago.dni === deuda.dni) {
                //Si coincide el dni de la deuda con el del pago voy dejando en 0 esa posición del array 
                //para descartarlo porque conincidió y así filtrar que quede solo el que no lo hizo. 
                sinDeudaAsociada[i] = null;

                if (pago.apellido === deuda.apellido) {
                    //Le resto el pago a la deuda                
                    deuda.debe -= pago.pago;
                    if (deuda.debe < 0) {
                        let aFavor = mpl.armarMsgPagoDeMas(deuda);
                        logger(false, aFavor);
                    } else if (deuda.debe != 0) {

                        if (deudasNew.indexOf(deuda) === -1) {
                            deudasNew.push(deuda);
                        }
                    }
                } else {
                    //Creo un objeto para guardar las deudas y los pagos que 
                    //coincidan en el dni pero no en el apellido y lo pusheo.
                    let deudaPago = {};
                    deudaPago.deuda = deuda;
                    deudaPago.pago = pago;

                    //Guardo deuda y pago con apellido erróneo.
                    coincideDnIPeroNoApellido.push(deudaPago);
                    //Me guardo la deuda ya que no se pudo pagar por el problema del apellido y debe quedar como pendiente
                    deudasNew.push(deuda);
                }
            }
        });
    });

    //Filtra objetos null creados por pagos sin deuda vinculada.
    sinDeudaAsociada = sinDeudaAsociada.filter(pago => pago != null);

    //Armado de msj para logger con apellido inexistente
    coincideDnIPeroNoApellido.forEach(deudaPago => {
        let coinciden = mpl.armarMsgPagoConDatosErroneos(deudaPago.deuda, deudaPago.pago);
        logger(false, coinciden);
    });

    //Armado de msj para logger pago sin deuda asociada
    sinDeudaAsociada.forEach(pago => {
        let sinDeuda = mpl.armarMsgPagoSinDeudaAsociada(pago);
        logger(false, sinDeuda);
    });

    return deudasNew;

}
export default {
    actualizar
}
