import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule],
})
export class LineChartComponent  implements OnInit {

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Cliente';
  yAxisLabel: string = 'Monto';
  timeline: boolean = true;

  @Input() view: any;
  
  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  multi: any[] = [];

  constructor(private webservice: ServicioService) { }

  ngOnInit() {
    this.webservice.registrarPagoGrafico();
    this.multi = this.webservice.obtenerDatosGraficoPorFormaDePago();
    console.log('Datos para el gráfico:', this.multi);  
    console.log(JSON.stringify(this.multi))
    // this.multi = [
    //   {
    //     "name":"transferencia",
    //     "series":[
    //       {
    //         "name":"Jose",
    //         "value":200
    //       },
    //       {
    //         "name":"Lucas",
    //         "value":300
    //       }
    //     ]
    //   },
    //   {
    //     "name":"cheque",
    //     "series":[
    //       {
    //         "name":"Jose",
    //         "value":100
    //       },
    //       {
    //         "name":"Lucas",
    //         "value":250
    //       }
    //     ]
    //   }
    // ]
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
