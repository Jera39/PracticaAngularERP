import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  datalista:any=[]
  private AcountTransfer: number = 0;
  private AcountCheq: number = 0;
  private ListaPagos: any[] = [];
  private ListaProductos: any[] = [];


  constructor() { }


  setData(data:any){
    this.datalista = data
  }

  getData(){
    return this.datalista
  }

  setCountTransfer(countT: number){
    this.AcountTransfer = countT
  }

  getCountTransfer(){
    return this.AcountTransfer;
  }

  resetCountTransfer(){
    this.AcountTransfer = 0;
  }

  setCountCheq(countC: number){
    this.AcountCheq = countC
  }

  getCountCheq(){
    return this.AcountCheq;
  }

  resetCountCheq(){
    this.AcountCheq = 0;
  }

  setListaPagos(pagos: any[]){
    console.log('Se actualizo la lista con: ', pagos)
    this.ListaPagos = [...this.ListaPagos, ...pagos];
    console.log('ahora se ve asi: ', this.ListaPagos)
  }

  getListaPagos(){
    console.log('Se llama a getListaPagos:', this.ListaPagos)
    return this.ListaPagos;
  }

  eliminarPago(pago: any) {
    const index = this.ListaPagos.findIndex(p => p.cliente === pago.cliente && p.monto === pago.monto);
    if (index !== -1) {
      this.ListaPagos.splice(index, 1);
      console.log('Se actualizo con eliminar pago:' ,this.ListaPagos)
    } else{
      console.log('No se logro eliminar por que no coincide nd')
    }
  }

  setProductos(producto:any[]){
    this.ListaProductos = [...this.ListaProductos, ...producto]
  }

  getProductos(){
    return this.ListaProductos
  }

  setVerticalBC(){

  }

  obtenerResumenPorFormaPago() {
    const resumen = [];

    // Agrupar los pagos por forma de pago y sumar los montos.
    const pagosAgrupados = this.ListaPagos.reduce((acc, pago) => {
      const monto = parseFloat(pago.monto);

      if (isNaN(monto)) return acc; // Si el monto no es un número, ignorar ese pago.

      if (acc[pago.formaPago]) {
        acc[pago.formaPago] += monto;  // Sumar el monto si ya existe esa forma de pago.
      } else {
        acc[pago.formaPago] = monto;  // Si no existe, iniciar la suma con el monto del pago.
      }

      return acc;
    }, {});

    // Convertir el objeto de pagos agrupados en un array de objetos con la estructura deseada.
    for (const formaPago in pagosAgrupados) {
      resumen.push({
        name: formaPago,
        value: pagosAgrupados[formaPago]
      });
    }

    return resumen;
  }
}
