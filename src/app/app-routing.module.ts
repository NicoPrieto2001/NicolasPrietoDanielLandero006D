import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'primario',
    pathMatch: 'full'
  },
  
  {
    path: 'primario',
    loadChildren: () => import('./pages/primario/primario.module').then( m => m.PrimarioPageModule)
  },
  {
    path: 'secundario',
    loadChildren: () => import('./pages/secundario/secundario.module').then( m => m.SecundarioPageModule)
  },
  {
    path: 'terciario',
    loadChildren: () => import('./pages/terciario/terciario.module').then( m => m.TerciarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
