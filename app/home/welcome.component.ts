import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routing } from '../app.router';

@Component({
    selector:'welcome',
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public title: string = "Welcome To Webxperts.Com";
}