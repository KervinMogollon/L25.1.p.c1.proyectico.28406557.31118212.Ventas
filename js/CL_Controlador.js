export default class CL_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarVentas() {
        this.modelo.procesarVentas(this.vista.procesarClientes());

        this.vista.reporteTienda(
            this.modelo.montFinalCaja(),
            this.modelo.mayorPago(),
            this.modelo.cantCliente1Art(),
        )
    }

    iniciarCaja(montCaj, porcIncremento){
        this.modelo.montCaja = montCaj;
        this.modelo.porcIncremento = porcIncremento   
    }
}