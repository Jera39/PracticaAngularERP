import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.page.html',
  styleUrls: ['./contabilidad.page.scss'],
  standalone: false,
})
export class ContabilidadPage implements OnInit {

  constructor(private notiConta: ServicioService) { }

  ngOnInit() {
  }

  pagosRealizados: any[] = [];
  

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Pago cancelado');
        return false
      }
    },
    {
      text: 'Confirmar Pago',
      role: 'confirm',
    },
  ];

  obtenerCheq() {
    return this.notiConta.getCountCheq()
  }
  obtenerTransfer() {
    return this.notiConta.getCountTransfer()
  }

  resetCheq() {
    this.notiConta.resetCountCheq()
  }

  resetTransfer() {
    this.notiConta.resetCountTransfer()
  }

  listaPagos: any[] = [];

  obtenerLista(tipo: string) {
    this.listaPagos = this.notiConta.getListaPagos().filter(pagos => pagos.formaPago === tipo)
    console.log(this.listaPagos)
    return this.listaPagos
  }

  confirmCheq(event:any, pago:any){
    console.log('Evento:', event);
    if (event.detail.role === 'confirm') {
      this.pagosRealizados.push(pago)
      this.notiConta.eliminarPago(pago)
      this.listaPagos = this.notiConta.getListaPagos()
      console.log('Se logro hacer el push:', this.pagosRealizados)
    } else{
      console.log('No se logró confirmar el pago o fue cancelado', event ? event.role : 'Evento sin rol');
    }
  }

}
