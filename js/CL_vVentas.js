export default class CL_vVentas {
    constructor() {
        this.inNombre = document.getElementById("ventaForm_inNombre");
        this.inFactura = document.getElementById("ventaForm_inFactura");
        this.inCostoT = document.getElementById("ventaForm_inCostoT");
        this.inCantArts = document.getElementById("ventaForm_inCantArts");
        this.btProcesar = document.getElementById("ventaForm_btProcesar");
    }

    get nombre() {
        return this.inNombre.value
    }

    get factura() {
        return this.inFactura.value;
    }

    get costoT() {
        return +this.inCostoT.value;
    }

    get cantArts() {
        return +this.inCantArts.value;
    }
}