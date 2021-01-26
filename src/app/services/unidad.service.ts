import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Unidad } from '../interface/unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  RUTA_API = "http://127.0.0.1:8000/api";
  constructor(private HttpClient:HttpClient) { }

  getUnidades(){
    return this.HttpClient.get(this.RUTA_API+'/unidades');

  }

}
