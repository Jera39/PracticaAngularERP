import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule],
})
export class VerticalBarChartComponent  implements OnInit {

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Programaciones de Pago';
  showYAxisLabel = true;
  yAxisLabel = 'Montos';
  @Input () view: any;

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  single: any[] = []

  constructor(private webservice: ServicioService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.obtenerResumen)
    this.obtenerResumen();
  }

  obtenerResumen() {
    const resumen = this.webservice.obtenerResumenPorFormaPago();


    this.single = resumen.map(item => ({
      name: item.name, 
      value: item.value 
    }));

    this.cdr.detectChanges();
  }

  onSelect(event: any) {
    console.log(event);
  }

}

