import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrls: ['./pie-grid.component.scss'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class PieGridComponent implements OnInit {

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;
  @Input() view: any;
  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  single: any[] = [];

  constructor(private webservice : ServicioService) { }

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

  onSelect(event: any) {
    console.log(event);
  }

}

