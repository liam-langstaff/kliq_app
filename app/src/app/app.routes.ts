import { Routes } from '@angular/router';
import {PromotionsComponent} from "./features/views/promotions/promotions.component";

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/promotions'
}, {
  path: 'promotions',
  component: PromotionsComponent,
  data: {
    background: '#F6F6F6'
  }
}];
