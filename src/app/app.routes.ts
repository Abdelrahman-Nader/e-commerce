import { Routes } from '@angular/router';
import { ProductsComponent } from './public/products/products.component';

export const routes: Routes = [

  {path: 'public',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  // {path:'products', component: ProductsComponent},

  {path: '', pathMatch: 'full', redirectTo: 'public'},
  {path: '**', redirectTo: 'public'}
];
