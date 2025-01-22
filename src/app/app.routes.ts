import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home/home.component';
import { MenuComponent } from '../pages/menu/menu/menu.component';
import { LocationComponent } from '../pages/location/location/location.component';
import { FeedbackComponent } from '../pages/feedback/feedback/feedback.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '*',
    redirectTo: '',
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'location',
    component: LocationComponent,
  },
];
