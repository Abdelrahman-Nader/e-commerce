import { Routes } from '@angular/router';

export const routes: Routes = [

  {path: 'public',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },

  {path: '', pathMatch: 'full', redirectTo: 'public'},
  {path: '**', redirectTo: 'public'}
];
