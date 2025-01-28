import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmisionComprobantesPageRoutingModule } from './emision-comprobantes-routing.module';

import { EmisionComprobantesPage } from './emision-comprobantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmisionComprobantesPageRoutingModule
  ],
  declarations: [EmisionComprobantesPage]
})
export class EmisionComprobantesPageModule {}
