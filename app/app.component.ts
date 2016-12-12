import {Component ,Input} from '@angular/core';
import {ProductListComponent} from './products/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import { routing } from './app.router';

@Component({
   selector: 'my-app',
   styleUrls:['./app/app.component.css'], 
    template : `<div>
    <h2>{{Title}}</h2>
    <nav>
    <a routerLink="/welcome" routerLinkActive="active">HOME</a>
    <a routerLink="/ListComponent" routerLinkActive="active">PRODUCT</a>
  </nav>
   <router-outlet></router-outlet>
     </div>
    ` ,

})
export class AppComponent{
Title: String="Welcom To Angular2 Application";
}