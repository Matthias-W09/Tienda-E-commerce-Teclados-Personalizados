import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'landing',
    loadComponent: () => import('./pages/landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'inicio-sesion',
    loadComponent: () => import('./pages/inicio-sesion/inicio-sesion.page').then( m => m.InicioSesionPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'inicio-admin',
    loadComponent: () => import('./pages/inicio-admin/inicio-admin.page').then( m => m.InicioAdminPage)
  },
  {
    path: 'productos-principal',
    loadComponent: () => import('./pages/productos-principal/productos-principal.page').then( m => m.ProductosPrincipalPage)
  },

];