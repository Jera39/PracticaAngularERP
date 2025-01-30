import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.page.html',
  styleUrls: ['./rrhh.page.scss'],
  standalone: false,
})
export class RRHHPage implements OnInit {

  datetime: any;

  tipoDocumento: string = '';
  numeroSerie: string = '';
  correlativo: number = 0;
  fechaEmision: any;

  tipoAnexo: string = '';
  codigoAnexo: string = '';
  nombreAnexo: string = '';
  responsable: string = '';

  tipoProducto: string = '';
  codigoProducto: string = '';
  cantidadProducto: number = 0;
  precioUnitario: number = 0;
  descripcionProducto: string = '';

  fechaProduccion: any;

  tipoDistribucion: string = '';
  fechaDistribucion: any;
  cantidadDistribuida: number = 0;
  ubicacionDistribucion: string = '';
  descripcionDistribucion: string = '';

  tipoProduccion: string = '';
  fechaDatosProduccion: any;
  cantidadProducida: number = 0;
  ubicacionProduccion: string = '';
  descripcionProduccion: string = '';

  datosHome: any[] = [];
  datosC: any[] = [];
  datosDP: any[] = [];
  datosDIS: any[] = [];

  constructor() { }

  ngOnInit() {
  }


  guardarHome() {
    const homepage = {
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
    }
    this.datosHome.push(homepage);
    console.log('Datos principales:', this.datosHome);
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

  faltaDatos() {

    if (
      this.tipoDocumento == '' ||
      this.numeroSerie == '' ||
      this.correlativo == 0 ||
      this.fechaEmision == '' ||
      this.tipoAnexo == '' ||
      this.codigoAnexo == '' ||
      this.nombreAnexo == '' ||
      this.responsable == '' ||
      this.tipoProducto == '' ||
      this.codigoProducto == '' ||
      this.cantidadProducto == 0 ||
      this.precioUnitario == 0 ||
      this.descripcionProducto == '' ||
      this.fechaProduccion == ''
    ) {
      console.log('Faltan datos')
      return true;
    } else {
      const datos = [
        this.tipoDocumento,
        this.numeroSerie,
      this.correlativo,
      this.fechaEmision,
      this.tipoAnexo,
      this.codigoAnexo,
      this.nombreAnexo,
      this.responsable,
      ]
      console.log('Estan todos los datos: ', datos)
      this.guardarHome()
      return false;
    }
  }
  
  guardar() {
    if (!this.faltaDatos()) {
      const datosFinales = {
        hommie: this.datosHome, 
        // productos: this.datosC,
        // produccion: this.datosDP,
        // distribucion: this.datosDIS,
      };

      console.log('Todos los datos guardados:', datosFinales);
    } else {
      alert('Faltan datos por completar. Por favor, asegúrese de llenar todos los campos.');
      console.log('No funciona tmr:');
    }

  }

}
