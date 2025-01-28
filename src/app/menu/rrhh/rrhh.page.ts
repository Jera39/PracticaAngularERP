import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.page.html',
  styleUrls: ['./rrhh.page.scss'],
  standalone: false,
})
export class RRHHPage implements OnInit {

  tipoDocumento: string = '';
  numeroSerie: string = '';
  correlativo: number = 0;
  fechaEmision: string = '';

  tipoAnexo: string = '';
  codigoAnexo: string = '';
  nombreAnexo: string = '';
  responsable: string = '';

  tipoProducto: string = '';
  codigoProducto: string = '';
  cantidadProducto: number = 0;
  precioUnitario: number = 0;
  descripcionProducto: string = '';

  fechaProduccion: string = '';

  tipoDistribucion: string = '';
  fechaDistribucion: string = '';
  cantidadDistribuida: number = 0;
  ubicacionDistribucion: string = '';
  descripcionDistribucion: string = '';

  tipoProduccion: string = '';
  fechaDatosProduccion: string = '';
  cantidadProducida: number = 0;
  ubicacionProduccion: string = '';
  descripcionProduccion: string = '';

  constructor() { }

  ngOnInit() {
  }

  guardar(){

  }

  guardarProducto(){

  }

  guardarDistribucion(){
    
  }

  guardarProduccion(){
    
  }

}
