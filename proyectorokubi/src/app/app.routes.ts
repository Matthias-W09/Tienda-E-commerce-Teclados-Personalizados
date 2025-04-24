import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'landing',
    loadComponent: () => import('./landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
];
