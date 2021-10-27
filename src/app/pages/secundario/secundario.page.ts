import { Component, OnInit} from '@angular/core';
import { DatosapiService } from 'src/app/servicios/datosapi.service';
import { int,Leye  } from '../interface/interface';/*
import { HttpClient } from '@angular/common/http';*/

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.page.html',
  styleUrls: ['./secundario.page.scss'],
})
export class SecundarioPage implements OnInit {

  dias : string;
  leyes : Leye[]=[];

  constructor(private api:DatosapiService, /*private http:HttpClient*/) { }

  ngOnInit() {
    
    this.api.obtenerDatos().subscribe(res => {
      /*console.log('datos', res);
      this.leyes.push(...res.leyes);*/
      this.dias= res;
    });
    
    /*
    this.http.get<any>('https://apis.digital.gob.cl/fl/feriados/2021')
      .subscribe(res => {
      console.log(res);
      this.dias = res;
    
      
    });*/
  }


}
