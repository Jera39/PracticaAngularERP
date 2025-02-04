import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmacenPageRoutingModule } from './almacen-routing.module';

import { AlmacenPage } from './almacen.page';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';
import { VerticalBarChartComponent } from 'src/app/components/vertical-bar-chart/vertical-bar-chart.component';
import { PieGridComponent } from 'src/app/components/pie-grid/pie-grid.component';
import { HorizontalBarChartComponent } from 'src/app/components/horizontal-bar-chart/horizontal-bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlmacenPageRoutingModule,
    VerticalBarChartComponent,
    PieChartComponent,
    PieGridComponent,
    HorizontalBarChartComponent
  ],
  declarations: [AlmacenPage]
})
export class AlmacenPageModule {}
