import { Component, OnInit } from '@angular/core';
import {StarComponent} from '../share/star.component';
import { Routes, RouterModule } from '@angular/router';
import { routing } from '../app.router';

@Component({
    selector: 'product-list',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],

   
})
export class ProductListComponent {
    Title: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'asif';
    products: any[] = [
       
        {
            "productId": 2,
            "productName": "Asif",
            "productCode": "Wap-0023",
            "releaseDate": "March 18, 2076",
            "description": "welcom to gpgc mardan",
            "productPrice": 345.99,
            "starRating": 4.2,
            "imageUrl": "./app/assets/image/waqar.png"
        },
        
    {
            "productId": 2,
            "productName": "Asif",
            "productCode": "Wap-0023",
            "releaseDate": "March 18, 2076",
            "description": "welcom to gpgc mardan",
            "productPrice": 345.99,
            "starRating": 4.2,
            "imageUrl": "./app/assets/image/waqar.png"
        },
        
    {
            "productId": 2,
            "productName": "Asif",
            "productCode": "Wap-0023",
            "releaseDate": "March 18, 2076",
            "description": "welcom to gpgc mardan",
            "productPrice": 345.99,
            "starRating": 4.2,
            "imageUrl": "./app/assets/image/waqar.png"
        },
        
    {
            "productId": 2,
            "productName": "Asif",
            "productCode": "Wap-0023",
            "releaseDate": "March 18, 2076",
            "description": "welcom to gpgc mardan",
            "productPrice": 345.99,
            "starRating": 4.2,
            "imageUrl": "./app/assets/image/waqar.png"
        },
     {
            "productId": 2,
            "productName": "Asif",
            "productCode": "Wap-0023",
            "releaseDate": "March 18, 2076",
            "description": "welcom to gpgc mardan",
            "productPrice": 345.99,
            "starRating": 4.2,
            "imageUrl": "./app/assets/image/waqar.png"
        },   
    ];
    

   toggleImage():void{
       this.showImage=!this.showImage;
   } 
   
}