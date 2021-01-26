import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../services/usuario.service';
import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  token : any;
  constructor( public usuarioService : UsuarioService, private route:Router) { }

  ngOnInit(): void {
  }

  login(){

    const user = {username : this.username, password : this.password};
    this.usuarioService.login(user).subscribe( data=>{
        console.log('token='+data);
        if(data==1){
          this.route.navigateByUrl('home');
        }else{
          alert('Usuario o contraseña incorrectos');
        }

    } );

    

  //  console.log("Se está tratando de logear con username:" + this.username + "   /password:" + this.password);
  }

}
