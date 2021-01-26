import { Component, OnInit } from '@angular/core';
import {Producto} from '../interface/producto';
import {Unidad} from '../interface/unidad';
import {Categoria} from '../interface/categoria';

import {ProductosService} from '../services/productos.service';
import {UnidadService} from '../services/unidad.service';
import {CategoriaService} from '../services/categoria.service';
import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  producto : Producto = {
    descripcion:null,
    codcategoria :null,
    codunidad :null,
    precio:null,
    stock: null

  };

  categorias : Categoria [];
  unidades : Unidad[];

  id:any;
  editing:boolean=false;
  productos:Producto[];

  constructor(private productosService:ProductosService, 
    private categoriasService:CategoriaService, 
    private unidadeService:UnidadService,
    private route:Router, private activatedRoute : ActivatedRoute) { 
    this.categoriasService.getCategorias().subscribe( (data:Categoria[]) => {
      this.categorias = data;
    });
    this.unidadeService.getUnidades().subscribe( (data:Unidad[]) => {
      this.unidades = data;
    });
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing = true;
      this.productosService.get().subscribe( (data:Producto[])=>{
        this.productos = data;
        this.producto = this.productos.find( (m)=>{return m.codproducto == this.id} );

      },(error) =>{
        console.log("ha oucrirod un error"+error);
      } );
    }else{
      this.editing = false;

    }
  }

  ngOnInit(): void {
  }

  SaveProductos(){ //este metodo se usara para grabar nuevo y editar
    if(this.editing){ //editar
        this.productosService.editar(this.producto).subscribe( (data)=>{
          
          this.route.navigateByUrl('home');
          
          alert('Producto actualizado');
        },(error)=>{
          alert('Error al editar el producto.');
        }
        );

    }else{ //para crear
        this.productosService.save(this.producto).subscribe( (data)=>{
          this.route.navigateByUrl('home');
          
          alert('Producto guardado');
        },(error)=>{
          alert('Error al guardar nuevo producto.');
        }
      

        );
  }
  }

  Cancelar(){
    this.route.navigateByUrl('home');
  }




}
