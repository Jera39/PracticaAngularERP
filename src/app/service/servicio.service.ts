import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  datalista:any=[]
  private AcountTransfer: number = 0;
  private AcountCheq: number = 0;
  private ListaPagos: any[] = [];


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
    this.ListaPagos = pagos;
  }

  getListaPagos(){
    return this.ListaPagos;
  }

  eliminarPago(pago: any) {
    const index = this.ListaPagos.findIndex(p => p.cliente === pago.cliente && p.monto === pago.monto && p.fecha == pago.monto);
    if (index !== -1) {
      this.ListaPagos.splice(index, 1);
    }
  }
}
