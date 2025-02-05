import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  datalista: any = []
  private AcountTransfer: number = 0;
  private AcountCheq: number = 0;
  private ListaPagos: any[] = [];
  private ListaProductos: any[] = [];

  private datosGraficoPorFormaDePago: any[] = [];


  constructor() { }


  setData(data: any) {
    this.datalista = data
  }

  getData() {
    return this.datalista
  }

  setCountTransfer(countT: number) {
    this.AcountTransfer = countT
  }

  getCountTransfer() {
    return this.AcountTransfer;
  }

  resetCountTransfer() {
    this.AcountTransfer = 0;
  }

  setCountCheq(countC: number) {
    this.AcountCheq = countC
  }

  getCountCheq() {
    return this.AcountCheq;
  }

  resetCountCheq() {
    this.AcountCheq = 0;
  }

  setListaPagos(pagos: any[]) {
    console.log('Se actualizo la lista con: ', pagos)
    this.ListaPagos = [...this.ListaPagos, ...pagos];
    console.log('ahora se ve asi: ', this.ListaPagos)
  }

  getListaPagos() {
    console.log('Se llama a getListaPagos:', this.ListaPagos)
    return this.ListaPagos;
  }

  eliminarPago(pago: any) {
    const index = this.ListaPagos.findIndex(p => p.cliente === pago.cliente && p.monto === pago.monto);
    if (index !== -1) {
      this.ListaPagos.splice(index, 1);
      console.log('Se actualizo con eliminar pago:', this.ListaPagos)
    } else {
      console.log('No se logro eliminar por que no coincide nd')
    }
  }

  setProductos(producto: any[]) {
    this.ListaProductos = [...this.ListaProductos, ...producto]
  }

  getProductos() {
    return this.ListaProductos
  }

  setVerticalBC() {

  }

  obtenerResumenPorFormaPago() {
    const resumen = [];

    // Agregar un console.log para ver la lista de pagos
    console.log('Lista de pagos:', this.ListaPagos);

    // Agrupamos los pagos por forma de pago
    const pagosAgrupados = this.ListaPagos.reduce((acc, pago) => {
      // Convertimos el monto a número
      const monto = parseFloat(pago.monto);

      // Verificamos si el monto es válido
      if (isNaN(monto)) {
        console.log(`Pago con monto no válido, omitiendo pago:`, pago);
        return acc;
      }

      // Verificamos si ya existe la forma de pago en el acumulador
      if (acc[pago.formaPago]) {
        acc[pago.formaPago] += monto;  // Sumamos el monto al total de esa forma de pago
      } else {
        acc[pago.formaPago] = monto;   // Si no existe, inicializamos el acumulador con el monto
      }

      return acc;
    }, {});

    // Verificamos el resultado del agrupamiento
    console.log('Pagos agrupados por forma de pago:', pagosAgrupados);

    // Convertimos el resultado en la estructura esperada
    for (const formaPago in pagosAgrupados) {
      resumen.push({
        name: formaPago,
        value: pagosAgrupados[formaPago]
      });
    }

    // Verificamos el resumen final antes de devolverlo
    console.log('Resumen final de pagos:', resumen);

    return resumen;
  }

  /////////

  registrarPagoGrafico() {
    const resumen = [];
  
    const pagosAgrupados = this.ListaPagos.reduce((acc: { [key: string]: { name: string, value: number }[] }, pago) => {
      const monto = parseFloat(pago.monto);
  
      if (isNaN(monto)) return acc;
  
      if (!acc[pago.formaPago]) {
        acc[pago.formaPago] = [];
      }
  
      const fechaExistente = acc[pago.formaPago].find((c) => c.name === pago.fecha);
  
      if (fechaExistente) {
        fechaExistente.value += monto;
      } else {
        acc[pago.formaPago].push({ name: pago.fecha, value: monto });
      }
      return acc;
    }, {});
  
    for (const formaPago in pagosAgrupados) {
      resumen.push({
        name: formaPago,
        series: pagosAgrupados[formaPago]
      });
    }

    this.datosGraficoPorFormaDePago = resumen;
    console.log('Resumen final para gráfico:', JSON.stringify(resumen, null, 2));
    return resumen;
}
  


  obtenerDatosGraficoPorFormaDePago() {
    return this.datosGraficoPorFormaDePago;
  }

}
