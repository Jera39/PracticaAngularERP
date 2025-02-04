// import { Component, Input, OnInit } from '@angular/core';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { NgApexchartsModule } from 'ng-apexcharts';

// @Component({
//   selector: 'app-pie-chart',
//   templateUrl: './pie-chart.component.html',
//   styleUrls: ['./pie-chart.component.scss'],
//   standalone: true,
//   imports: [NgxChartsModule]
// })
// export class PieChartComponent implements OnInit {

//   // options
//   showLegend: boolean = true;
//   showLabels: boolean = true;
//   @Input() view: any;
//   colorScheme: any = {
//     domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
//   };
//   single: any[] = [];

//   constructor() { }

//   ngOnInit() {
//     this.single = [
//       {
//         "name": "Germany",
//         "value": 8940000
//       },
//       {
//         "name": "USA",
//         "value": 5000000
//       },
//       {
//         "name": "France",
//         "value": 7200000
//       },
//       {
//         "name": "UK",
//         "value": 6200000
//       },
//       {
//         "name": "Italy",
//         "value": 4200000
//       },
//       {
//         "name": "Spain",
//         "value": 8200000
//       }
//     ];
//   }

//   onSelect(event: any) {
//     console.log(event);
//   }

// }

import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LegendPosition } from '@swimlane/ngx-charts';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class PieChartComponent implements OnInit {

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Right;

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
