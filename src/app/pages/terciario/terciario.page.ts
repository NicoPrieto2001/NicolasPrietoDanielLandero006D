import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-terciario',
  templateUrl: './terciario.page.html',
  styleUrls: ['./terciario.page.scss'],
})
export class TerciarioPage implements OnInit {
  
  /* esto es para validar los formularios , y poder guardar los datos ingresados*/

  usuario ={
    nombreU:'',
    edad:'',
    telefono:'',
    email:'',
    password:''
  }
  constructor(private alertcontroller:AlertController) { }
  
  async alerta() {
    const alert = await this.alertcontroller.create({
      message: 'Datos enviados',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  
  ngOnInit() {

  }
  

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
