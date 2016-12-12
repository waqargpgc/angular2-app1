"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./home/welcome.component');
var product_list_component_1 = require('./products/product-list.component');
var appRoutes = [
    {
        path: 'welcome',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    {
        path: 'ListComponent',
        component: product_list_component_1.ProductListComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.router.js.map