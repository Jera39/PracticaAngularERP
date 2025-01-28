import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
  standalone: false,
})
export class ReportesPage implements OnInit {

  constructor() { }

  selectedFile: File| null = null;
  contenidoReporte: string = "";
  numeroDestino: string = "";
  tipoReporte: string = "";

  enviarMensajeWhatsApp() {
    // Empaquetamos los datos en un objeto o array si lo prefieres
    const mensaje = {
      contenidoReporte: this.contenidoReporte,
      numeroDestino: this.numeroDestino,
      tipoReporte: this.tipoReporte
    };

    // Creamos un texto que se enviará al número de WhatsApp
    const mensajeTexto = `Reporte de tipo: ${mensaje.tipoReporte}\nContenido: ${mensaje.contenidoReporte}\nEnviado a: ${mensaje.numeroDestino}`;
    
    // Codificamos el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensajeTexto);

    // Construimos el enlace de WhatsApp con el número destino y el mensaje
    const enlaceWhatsApp = `https://wa.me/${mensaje.numeroDestino}?text=${mensajeCodificado}`;

    // Abrimos el enlace para enviar el mensaje
    window.open(enlaceWhatsApp, '_blank');
  }

  verificar() {
    console.log(this.contenidoReporte, this.numeroDestino, this.tipoReporte);
  }



  
  onFileSelected(event: any) {
    // Capturamos el archivo seleccionado
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('Archivo seleccionado:', file.name);
    }
  }

  ngOnInit() {
  }

}
