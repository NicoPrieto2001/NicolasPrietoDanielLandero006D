import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-temadepago',
  templateUrl: './temadepago.page.html',
  styleUrls: ['./temadepago.page.scss'],
})
export class TemadepagoPage implements OnInit {

  usuario={Numerot:'', code:'', date:'',name:''}
  constructor(private alertac:AlertController ) { }
  async alerta (){
    const alert = await this.alertac.create({

      message:'Se ha enviado correctamente sus datos',
      buttons:['Aceptar']
    });
    await alert.present();
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Se enviaron los datos');
    console.log(this.usuario);
  }
}
