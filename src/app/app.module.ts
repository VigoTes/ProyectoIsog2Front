import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Route,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination'

const routes:Route[] = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'form',component:FormComponent},
  {path:'form/:id',component:FormComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent
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
