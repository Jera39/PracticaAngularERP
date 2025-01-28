import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
  standalone: false,
})
export class PresupuestoPage implements OnInit {

  @ViewChild(IonTabs) tabs: IonTabs | undefined;

  pagos: any[] = [];
  nuevoPago = {
    cliente: '',
    monto: '',
    fecha: '',
    formaPago: ''
  };

  pagosFiltrados = [...this.pagos];
  busqueda: string = '';

  pagoEditar: any = null;
  indexEditar: number | null = null;

  transferCount: number = 0;


  constructor(
    private webservice: ServicioService
  ) { }

  ngOnInit() {
    this.filtrarPagos();
  }

  actualizarTransferCount() {
    const count = this.pagos.filter(pago => pago.formaPago === "transferencia").length;
    this.webservice.setCountTransfer(count);
  }

  actualizarCheqCount() {
    const count = this.pagos.filter(pago => pago.formaPago === "cheque").length;
    this.webservice.setCountCheq(count);
  }

  obtenerTransferCount(){
    const contador = this.webservice.getCountTransfer();
    return contador;
  }

  registrarPago() {
    if (this.nuevoPago.cliente && this.nuevoPago.monto && this.nuevoPago.fecha && this.nuevoPago.formaPago) {
      if (this.indexEditar !== null) {

        this.pagos[this.indexEditar] = { ...this.nuevoPago };
        this.indexEditar = null; 
      } else {

        this.pagos.push({ ...this.nuevoPago });
      }
      
      this.nuevoPago = { cliente: '', monto: '', fecha: '', formaPago: '' };
      this.filtrarPagos();
    } else {
      alert('Por favor, completa todos los campos.');
    }
    this.actualizarTransferCount()
    this.actualizarCheqCount()
    this.guardarLista()
    console.log(this.obtenerTransferCount())
  }

  editarPago(index: number) {
    const pago = this.pagos[index];
    this.nuevoPago = { ...pago }; 
    this.indexEditar = index; 

    if (this.tabs) {
      this.tabs.select('home'); 
    }
  }

  eliminarPago(index: number) {
    this.pagos.splice(index, 1);  
    this.filtrarPagos();
  }

  filtrarPagos() {
    if (this.busqueda.trim() === '') {
      this.pagosFiltrados = [...this.pagos];
    } else {
      this.pagosFiltrados = this.pagos.filter(pago =>
        pago.cliente.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    }
  }

  guardarLista(){
    this.webservice.setListaPagos(this.pagos)
  }
}
