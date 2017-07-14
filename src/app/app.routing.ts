import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { NgSelectMainComponent } from './ng-select/main.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ng-select', component: NgSelectMainComponent },
];

export const routing = RouterModule.forRoot(routes);
