import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {StarComponent} from './share/star.component';
import {WelcomeComponent} from './home/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     routing
  ],
  declarations: [
    AppComponent,
   ProductListComponent,
   StarComponent,
   WelcomeComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }