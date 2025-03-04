export default class CL_mVentas{
    constructor({nombre, factura, costoT, cantArts}){
        this.nombre = nombre;
        this.factura = factura;
        this.costoT = costoT;
        this.cantArts = cantArts;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre
    }

    set factura(factura){
        this._factura = +factura;
    }

    get factura(){
        return this._factura
    }

    set costoT(costoT){
        this._costoT = +costoT;
    }

    get costoT(){
        return this._costoT
    }

    set cantArts(cantArts){
        this._cantArts = +cantArts;
    }

    get cantArts(){
        return this._cantArts
    }
}