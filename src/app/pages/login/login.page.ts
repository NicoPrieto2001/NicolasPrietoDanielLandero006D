import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(private fb:FormBuilder, public alertController:AlertController, public navC:NavController) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
      
    });


  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password ){
      console.log("ingresado");
      localStorage.setItem('ingresado','true');
      this.navC.navigateRoot('primario');

      const alert = await this.alertController.create({
        message: 'bienvenido ' + f.nombre,
        buttons: ['aceptar']
      });

      await alert.present();
      return;

    }else{
      const alert = await this.alertController.create({
        message: 'Datos Incorrectos',
        buttons: ['aceptar']
      });
  
      await alert.present();
      return;
    }
  }

}
