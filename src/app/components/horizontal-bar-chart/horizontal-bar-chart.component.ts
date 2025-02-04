import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class HorizontalBarChartComponent implements OnInit {

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Forma de Pago';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Monto total';
  @Input() view: any;
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  single: any[] = [];

  constructor(private webservice: ServicioService) { }

  ngOnInit() { 
    this.obtenerResumen();
  }

  obtenerResumen() {
    const resumen = this.webservice.obtenerResumenPorFormaPago();
    this.single = resumen.map(item => ({
      name: item.name,
      value: item.value
    }));
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
