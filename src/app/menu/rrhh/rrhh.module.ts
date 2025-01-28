import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RRHHPageRoutingModule } from './rrhh-routing.module';

import { RRHHPage } from './rrhh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RRHHPageRoutingModule
  ],
  declarations: [RRHHPage]
})
export class RRHHPageModule {}
