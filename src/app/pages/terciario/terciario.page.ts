import { Component, OnInit,ViewChild } from '@angular/core';
import { AlertController, Platform,IonList, ToastController } from '@ionic/angular';
import { DatosService,Datos } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-terciario',
  templateUrl: './terciario.page.html',
  styleUrls: ['./terciario.page.scss'],
})
export class TerciarioPage implements OnInit {

  
  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList; 
  
  /* esto es para validar los formularios , y poder guardar los datos ingresados*/

  usuario ={
    nombreU:'',
    edad:'',
    telefono:'',
    email:'',
    password:''
  }
  constructor(private alertcontroller:AlertController,
              private storageService: DatosService, 
              private plt: Platform, 
              private toastController: ToastController) {
      this.plt.ready().then(()=>{
        this.loadDatos();       //llamamos a un método 
      });
  }
  
  async alerta() {
    const alert = await this.alertcontroller.create({
      message: 'Datos enviados exitosamente',
      buttons: ['aceptar']
    });
  
    await alert.present();
  }
  
  
  ngOnInit() {

  }

  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

   //create
   addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }

  //update
  updateDatos(dato: Datos){
    dato.Nombre = `UPDATED: ${dato.Nombre}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  } 

  //delete
  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

 




  
  
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
