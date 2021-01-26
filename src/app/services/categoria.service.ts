import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Categoria } from '../interface/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  RUTA_API = "http://127.0.0.1:8000/api";
  constructor(  private HttpClient:HttpClient ) { }


  getCategorias(){
    return this.HttpClient.get(this.RUTA_API+'/categorias');

  }
}
