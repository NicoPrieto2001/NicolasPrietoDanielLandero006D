import { Component } from '@angular/core';



interface componente {
  icon:string;
  name:string;
  redirecTo:string;
}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {

  constructor() {}

  /* esto es para los link de la hamburguesa, con los links , y el titulo que ira alado*/
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
}
