import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopsComponent } from './pages/shops/shops.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shops',
    component: ShopsComponent,
  },
];

