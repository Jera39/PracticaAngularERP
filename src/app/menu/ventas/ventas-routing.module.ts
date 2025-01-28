import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentasPage } from './ventas.page';
import { PresupuestoPage } from './presupuesto/presupuesto.page';

const routes: Routes = [
  {
    path: '',
    component: VentasPage,
    children: [
      {
        path: '',
        component: PresupuestoPage,
        loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
      },
      {
        path: 'presupuesto',
        loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
      },
      {
        path: 'reportes',
        loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasPageRoutingModule {}
