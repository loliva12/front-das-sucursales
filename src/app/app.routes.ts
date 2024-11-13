import {Routes} from '@angular/router';
import {RouteResolver} from './services/route.resolver';
import {CartComponent} from './paginas/cart/cart.component';
import {HomeComponent} from './paginas/home/home.component';
import {CompareComponent} from './paginas/compare/compare.component';

// Configuración estática de componentes
const componentMap: { [key: string]: any } = {
  HomeComponent,
  CartComponent
};

export const routes: Routes = [
  {
    path: '',
    resolve: { dynamicRoutes: RouteResolver }, // Resolver para cargar rutas
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'compare', component: CompareComponent },
      { path: '**', redirectTo: 'home' } // Ruta comodín
    ]
  }
];
