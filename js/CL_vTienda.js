import CL_mVentas from "./CL_mVentas.js";
import CL_vVentas from "./CL_vVentas.js";

export default class CL_vTienda {
    constructor() {
        this.inMontoCaja = document.getElementById("tiendaForm_inMontoCaja");
        this.inPorcIncremento = document.getElementById("tiendaForm_inPorcIncremento");
        this.btIniciar = document.getElementById("tiendaForm_btIniciar");

        this.controlador = null;
        this.mVentas = null;

        this.vVentas = new CL_vVentas();

        this.tabla = document.getElementById("tiendaForm_tabla");
        this.salida = document.getElementById("tiendaForm_salida");

        this.vVentas.btProcesar.onclick= () =>
            this.controlador.procesarVentas();

        this.btIniciar.onclick = () => {
            this.controlador.iniciarCaja(
                this.inMontoCaja.value,
                this.inPorcIncremento.value,
            );
            this.inMontoCaja.disabled = true;
            this.inPorcIncremento.disabled = true;
            this.btIniciar.hidden = true;
        };
    }

    procesarClientes() {
        this.mVentas = new CL_mVentas({
            nombre: this.vVentas.nombre,
            factura: this.vVentas.factura,
            costoT: this.vVentas.costoT,
            cantArts: this.vVentas.cantArts,
        });
        return this.mVentas;
    }

    reporteTienda(CierreCaja, PagoMayor, lblCliente1Art) {
        this.tabla.innerHTML += `
    <tr>
      <td>${this.mVentas.nombre}</td>
      <td>${this.mVentas.factura}</td>
      <td>${this.mVentas.costoT}</td>
      <td>${this.mVentas.cantArts}</td>
      
    </tr>`;

        this.salida.innerHTML =`
        <br><strong>Monto final en caja:</strong> ${CierreCaja}BsD
        <br><strong>Cliente que pagó el monto mayor:</strong> ${PagoMayor}
        <br><strong>Cantidad de clientes que sólo llevaron 1 artículo:</strong> ${lblCliente1Art}
        <br>
        `

    }
}