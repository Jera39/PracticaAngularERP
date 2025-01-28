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

  datosC: any[] = [];
  datosDP: any[] = [];
  datosDIS: any[] = []; 

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    const datosFinales = {
      documento: {
        tipoDocumento: this.tipoDocumento,
        numeroSerie: this.numeroSerie,
        correlativo: this.correlativo,
        fechaEmision: this.fechaEmision,
      },
      anexo: {
        tipoAnexo: this.tipoAnexo,
        codigoAnexo: this.codigoAnexo,
        nombreAnexo: this.nombreAnexo,
        responsable: this.responsable,
      },
      productos: this.datosC,
      produccion: this.datosDP,
      distribucion: this.datosDIS,
    };

    console.log('Todos los datos guardados:', datosFinales);
  }

  guardarProducto() {
    const producto = {
      tipoProducto: this.tipoProducto,
      codigoProducto: this.codigoProducto,
      cantidadProducto: this.cantidadProducto,
      precioUnitario: this.precioUnitario,
      descripcionProducto: this.descripcionProducto,
      fechaProduccion: this.fechaProduccion,
    };
    this.datosC.push(producto);
    console.log('Producto guardado:', producto);
  }

  guardarDistribucion() {
    const distribucion = {
      tipoDistribucion: this.tipoDistribucion,
      cantidadDistribuida: this.cantidadDistribuida,
      ubicacionDistribucion: this.ubicacionDistribucion,
      descripcionDistribucion: this.descripcionDistribucion,
      fechaDistribucion: this.fechaDistribucion,
    };
    this.datosDIS.push(distribucion);
    console.log('Distribución guardada:', distribucion);
  }

  guardarProduccion() {
    const produccion = {
      tipoProduccion: this.tipoProduccion,
      cantidadProducida: this.cantidadProducida,
      ubicacionProduccion: this.ubicacionProduccion,
      descripcionProduccion: this.descripcionProduccion,
      fechaDatosProduccion: this.fechaDatosProduccion,
    };
    this.datosDP.push(produccion);
    console.log('Producción guardada:', produccion);
  }

}
