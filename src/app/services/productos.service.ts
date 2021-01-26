import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Producto } from '../interface/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  RUTA_API = "http://127.0.0.1:8000/api";


  constructor(private HttpClient:HttpClient) { 


  }

  get(){
    return this.HttpClient.get(this.RUTA_API+'/productos')
  }

  save(producto:Producto){
    return this.HttpClient.post(this.RUTA_API+'/productos',producto);

  }

  editar(producto : Producto) {
    return this.HttpClient.put( this.RUTA_API+'/productos/'+producto.codproducto,producto);
  }

  eliminar(codproducto) {
    return this.HttpClient.delete( this.RUTA_API+'/productos/'+codproducto);
  }


}
