import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgSelect } from './ng-select';

@NgModule({
    imports: [
        BrowserModule,
    ],
    exports: [
        NgSelect,
    ],
    declarations: [
        NgSelect,
    ]
})
export class NgSelectModule { }