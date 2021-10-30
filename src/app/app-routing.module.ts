import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'primario',
    loadChildren: () => import('./pages/primario/primario.module').then( m => m.PrimarioPageModule),
    canActivate: [IngresadoGuard]
    
  },
  {
    path: 'secundario',
    loadChildren: () => import('./pages/secundario/secundario.module').then( m => m.SecundarioPageModule)
    ,canActivate: [IngresadoGuard]/* esto es para solo los que estan ingresado*/
  },
  {
    path: 'terciario',
    loadChildren: () => import('./pages/terciario/terciario.module').then( m => m.TerciarioPageModule),
    canActivate:[IngresadoGuard]
    
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
    ,canActivate: [IngresadoGuard]/* esto es para solo los que estan ingresado*/
  },
  {
    path: 'temadepago',
    loadChildren: () => import('./pages/temadepago/temadepago.module').then( m => m.TemadepagoPageModule)
    ,canActivate: [IngresadoGuard]/* esto es para solo los que estan ingresado*/
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
