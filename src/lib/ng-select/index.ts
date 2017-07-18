import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgSelectComponent } from './ng-select';

@NgModule({
    imports: [
        BrowserModule,
    ],
    exports: [
        NgSelectComponent,
    ],
    declarations: [
        NgSelectComponent,
    ]
})
export class NgSelectModule { }
