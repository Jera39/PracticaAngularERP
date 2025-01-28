import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RRHHPage } from './rrhh.page';

const routes: Routes = [
  {
    path: '',
    component: RRHHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RRHHPageRoutingModule {}
