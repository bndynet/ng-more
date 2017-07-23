import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgColorComponent } from './ng-color';

@NgModule({
    imports: [
        BrowserModule,
    ],
    exports: [
        NgColorComponent,
    ],
    declarations: [
        NgColorComponent,
    ]
})
export class NgColorModule { }
