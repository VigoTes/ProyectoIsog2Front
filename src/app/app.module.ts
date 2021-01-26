import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Route,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './login/login.component'

const routes:Route[] = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'form',component:FormComponent},
  {path:'form/:id',component:FormComponent},
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
