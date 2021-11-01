import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { int } from '../pages/interface/interface';
@Injectable({
  providedIn: 'root'
})
export class DatosapiService {

  constructor(private datos:HttpClient) { }

  obtenerDatos(){
    return this.datos.get<any>('https://apis.digital.gob.cl/fl/feriados/2021');
  }



}
