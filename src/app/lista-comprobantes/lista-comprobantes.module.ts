import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaComprobantesPageRoutingModule } from './lista-comprobantes-routing.module';

import { ListaComprobantesPage } from './lista-comprobantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaComprobantesPageRoutingModule
  ],
  declarations: [ListaComprobantesPage]
})
export class ListaComprobantesPageModule {}
