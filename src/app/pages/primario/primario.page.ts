import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface componente {
  icon:string;
  name:string;
  redirecTo:string;
}
@Component({
  selector: 'app-primario',
  templateUrl: './primario.page.html',
  styleUrls: ['./primario.page.scss'],
})
export class PrimarioPage implements OnInit {
  componentes:componente[]=[
    {
      icon:'aperture-sharp',
      name:'secundario',
      redirecTo:'/secundario'
      
    },

    {
      icon:'car-sharp',
      name:'terciario',
      redirecTo:'/terciario'
      
    }





  ]

  constructor(private menuController:MenuController) { }
  

  ngOnInit() {
  }
  menu(){
    this.menuController.open('first');

  }
}
