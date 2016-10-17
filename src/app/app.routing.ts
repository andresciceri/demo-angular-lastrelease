import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent } from './stores/stores.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StoresComponent
  },
  {
    path: 'store-detail/:id',
    component: StoreDetailComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);