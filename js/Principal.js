/**
 * VENTAS
Se desea llevar un control de las ventas que realiza
una tienda. Se tiene por cada venta: nombre del cliente,
número de factura, costo y cantidad de artículos. Se
requiere de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
monto inicial en caja y el porcentaje de incremento para
el costo de cada venta.

Primeros requerimientos
Monto final en caja
Cliente que pagó el monto mayor
Cantidad de clientes que sólo llevaron 1 artículo

Datos de inicialización para Cl_tienda
montoCaja: 200,
porcIncremento: 25.00

Ventas de prueba
cliente: 'Luis',
factura: 1111,
costo: 100,
cnArticulos: 3

cliente: 'Carla',
factura: 2222,
costo: 50,
cnArticulos: 1

cliente: Mery',
factura: 3333,
costo: 200,
cnArticulos: 10
 */

import CL_mTienda from "./CL_mTienda.js";
import CL_vTienda from "./CL_vTienda.js";
import CL_Controlador from "./CL_Controlador.js";

export default class CL_Principal {
    constructor() {
        let modelo = new CL_mTienda(),
            vista = new CL_vTienda(),
            controlador = new CL_Controlador(modelo, vista);
        vista.controlador = controlador
    }
}