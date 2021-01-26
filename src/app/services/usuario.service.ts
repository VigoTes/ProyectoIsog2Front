import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  RUTA_API = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  login (user){
    return this.http.post(this.RUTA_API+"/loginAPI" ,user);
  }
}
