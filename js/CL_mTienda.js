export default class CL_mTienda {
    constructor(montCaja = 0 , porcIncremento = 0) {
        this.montCaja = montCaja;
        this.porcIncremento = porcIncremento;
        /**atributos deribados */
        this.acuVentas = 0;
        this.ventaMayor = null;
        this.clienteMayor = "";
        this.cntClientes1 = 0;
    }

    set montCaja(montCaja) {
        this._montCaja = +montCaja;
    }

    get montCaja() {
        return this._montCaja;
    }

    set porcIncremento(porcIncremento) {
        this._porcIncremento = +porcIncremento;
    }

    get porcIncremento() {
        return this._porcIncremento;
    }

    procesarVentas(vents) {
        this.acuVentas += ((vents.costoT + (vents.costoT * (this.porcIncremento / 100))))

        if (vents.costoT > this.ventaMayor) {
            this.ventaMayor = vents.costoT
            this.clienteMayor = vents.nombre
        }

        if (vents.cantArts === 1)
            this.cntClientes1++
    }

    montFinalCaja() {
        return this.montCaja + this.acuVentas
    }

    mayorPago() {
        return this.clienteMayor
    }

    cantCliente1Art() {
        return this.cntClientes1
    }
}