import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'emision-comprobantes',
    loadChildren: () => import('./emision-comprobantes/emision-comprobantes.module').then( m => m.EmisionComprobantesPageModule)
  },
  {
    path: 'lista-comprobantes',
    loadChildren: () => import('./lista-comprobantes/lista-comprobantes.module').then( m => m.ListaComprobantesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
