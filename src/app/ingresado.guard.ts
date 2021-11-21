import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {

  constructor(public navC: NavController){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      
      /*ya esta ingresado*/
      if(localStorage.getItem('ingresado')){
        return true;
      }else{
        this.navC.navigateRoot('login');
        return false;
      }


  }
  
}
