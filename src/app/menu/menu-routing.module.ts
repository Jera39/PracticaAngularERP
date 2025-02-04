import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'contabilidad',
        loadChildren: () => import('./contabilidad/contabilidad.module').then(m => m.ContabilidadPageModule)
      },
      {
        path: 'ventas',
        loadChildren: () => import('./ventas/ventas.module').then( m => m.VentasPageModule),
      },
      {
        path: 'almacen',
        loadChildren: () => import('./almacen/almacen.module').then( m => m.AlmacenPageModule)
      },
      {
        path: 'rrhh',
        loadChildren: () => import('./rrhh/rrhh.module').then( m => m.RRHHPageModule)
      },
    ]
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
