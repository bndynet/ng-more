import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { NgSelectMainComponent } from './ng-select/main.component';
import { NgColorMainComponent } from './ng-color/main.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ng-select', component: NgSelectMainComponent },
  { path: 'ng-color', component: NgColorMainComponent },
];

export const routing = RouterModule.forRoot(routes);
