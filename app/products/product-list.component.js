"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.Title = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = 'asif';
        this.products = [
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
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/products/product-list.component.html',
            styleUrls: ['app/products/product-list.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map