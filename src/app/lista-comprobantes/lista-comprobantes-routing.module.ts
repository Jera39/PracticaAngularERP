import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComprobantesPage } from './lista-comprobantes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComprobantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaComprobantesPageRoutingModule {}
