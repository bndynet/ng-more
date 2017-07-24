import { Component, AfterViewInit, ElementRef } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';
import * as he from 'he/he.js';

@Component({
    selector: 'ng-color-main',
    templateUrl: './main.component.html',
})
export class NgColorMainComponent implements AfterViewInit {

    selectedResult: any;
    data: any[];

    codeHtml: string;
    codeTypeScript: string;

    constructor(
        private el: ElementRef,
        private highlightJsService: HighlightJsService,
    ) {
        this.selectedResult = { id: 3 };
        this.data = [
            { id: 1, color: '#ffffff', label: 'White' },
            { id: 2, color: '#ff0000', label: 'Red' },
            { id: 3, color: '#00ff00', label: 'Green' },
            { id: 4, color: '#0000ff', label: 'Blue' },
        ];

        this.codeTypeScript = `
        this.selectedResult = { id: 3 };
        this.data = [
            { id: 1, color: '#ffffff', label: 'White' },
            { id: 2, color: '#ff0000', label: 'Red' },
            { id: 3, color: '#00ff00', label: 'Green' },
            { id: 4, color: '#0000ff', label: 'Blue' },
        ];
    `;
        this.codeHtml = he.encode(`
<ng-color [source]="data" keyField="id" valueField="color" labelField="label" [disabled]="isDisabled" [(model)]="selectedResult" (itemSelected)="onItemSelected($event)"></ng-color>
`);
    }

    ngAfterViewInit() {
        this.el.nativeElement.querySelectorAll('.code').forEach((item) => {
            this.highlightJsService.highlight(item);
        });
    }

    onItemSelected(item) {
        console.debug(item);
    }
}
