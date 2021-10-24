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
  },  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'temadepago',
    loadChildren: () => import('./pages/temadepago/temadepago.module').then( m => m.TemadepagoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
