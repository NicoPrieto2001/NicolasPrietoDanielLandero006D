import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';



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

  constructor(private alertController:AlertController) {}

  /* esto es para los link de la hamburguesa, con los links , y el titulo que ira alado*/
  componentes:componente[]=[

    {
      icon:'phone-portrait-outline',
      name:'mapa',
      redirecTo:'/map'
    },

   { icon:'card-outline',
      name:'Tema de Pago',
      redirecTo:'/temadepago'
      
    },

  ]

  
}
