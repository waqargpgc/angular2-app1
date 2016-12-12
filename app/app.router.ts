import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent }      from './home/welcome.component';
import { ProductListComponent }      from './products/product-list.component';
const appRoutes: Routes = [

  {
  path: 'welcome',
  component: WelcomeComponent
},
{
  path: '',
  redirectTo: '/welcome',
  pathMatch: 'full'
},
{
    path: 'ListComponent',
    component:  ProductListComponent
  },

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);