import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.page.html',
  styleUrls: ['./almacen.page.scss'],
  standalone: false,
})
export class AlmacenPage implements OnInit {

  constructor(private servicio : ServicioService) { }

  listaProductos: any[] = [];

  ngOnInit() {
  }

  obtenerProductos(){
    this.listaProductos = this.servicio.getProductos()
    return this.listaProductos.length
  }


}
