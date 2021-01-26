import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

import { Producto } from '../interface/producto';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageActual : number = 1;

  productos:Producto[] ;

  constructor(private productosService:ProductosService){
    this.ObtenerProductos();
  }

  
  ObtenerProductos(){ //obtenemos los datos
    this.productosService.get().subscribe((data:Producto[]) => {
      this.productos = data;

    },(error)=>{
      alert('Ocurrio un error al obtener los productos');
    }); 

  
  }

  eliminar(codproducto){
    if(confirm('seguro que desea eliminar')){
      this.productosService.eliminar(codproducto).subscribe( (data)=>{
        this.ObtenerProductos();


      },(error)=>{
        console.log("Ha ocurrido un error al eliminar "+error);
      } );

    }

  }

  ngOnInit(): void {
  }


}
