import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-terciario',
  templateUrl: './terciario.page.html',
  styleUrls: ['./terciario.page.scss'],
})
export class TerciarioPage implements OnInit {
  usuario={
    email:'',
    password:''
  }
  constructor() { }

  ngOnInit() {

  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario)
  }

}
