import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';





@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(private fb:FormBuilder, private alertController:AlertController,public navC:NavController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'numeroT': new FormControl("",Validators.required),
      'Cpassword': new FormControl("",Validators.required)
      
    });
   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;
    

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        message: 'Se necesita que se rellenen todos los campos ',
        buttons: ['aceptar']
      });
  
      await alert.present();
      return;

    }

    if(f.password != f.Cpassword){
      const alert = await this.alertController.create({
        message: 'deben ser iguales las contraseñas',
        buttons: ['aceptar']
      });
  
      await alert.present();
      return;

    }

    var usuario = {
      nombre : f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
    this.navC.navigateRoot('login');
  }

}
