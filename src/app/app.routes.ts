import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/home.component').then(c => c.HomeComponent),
    data: { title: 'homePages' }
  },
  {
    path: 'shops',
    loadComponent: () => import('./modules/shopsMobule/shops.component').then(c => c.ShopsComponent),
    data: { title: 'المتاجر' },
    loadChildren: () => [
      {
        path: '',
        loadComponent: () => import('./modules/shopsMobule/shop-list/shop-list.component').then(c => c.ShopListComponent),
        data: { title: 'المتاجر' }
      },
      {
        path: 'shop-detail',
        loadComponent: () => import('./modules/shopsMobule/shop-details/shop-details.component').then(c => c.ShopDetailsComponent),
        data: { title: 'تفاصيل المتجر' }
      }
    ]
  },
  {
    path: 'notification',
    loadComponent: () => import('./modules/notificationModule/notifiction-sidebar/notifiction-sidebar.component').then(c => c.NotifictionSidebarComponent),
    data: { title: 'homePages' }
  },
];
