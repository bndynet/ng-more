import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgPageComponent } from './ng-page';

@NgModule({
    imports: [
        BrowserModule,
    ],
    exports: [
        NgPageComponent,
    ],
    declarations: [
        NgPageComponent,
    ]
})
export class NgPageModule { }
