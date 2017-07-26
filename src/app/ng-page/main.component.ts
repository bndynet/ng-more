import { Component, AfterViewInit, ElementRef } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';
import * as he from 'he/he.js';

@Component({
    selector: 'ng-color-main',
    templateUrl: './main.component.html',
})
export class NgPageMainComponent implements AfterViewInit {

    itemCount = 105;
    pageSize = 10;
    page = 3;

    codeHtml: string;
    codeTypeScript: string;

    constructor(
        private el: ElementRef,
        private highlightJsService: HighlightJsService,
    ) {
        this.codeTypeScript = `
itemCount = 105;
pageSize = 10;
page = 3;
        `;
        this.codeHtml = he.encode(`
<input type="number" class="form-control" [(ngModel)]="itemCount" />
<input type="number" class="form-control" [(ngModel)]="pageSize" />
<ng-page [pageSize]="pageSize" [itemCount]="itemCount" [(model)]="page" (pageChanged)="onPageChanged($event)"></ng-page>
`);
    }

    ngAfterViewInit() {
        this.el.nativeElement.querySelectorAll('.code').forEach((item) => {
            this.highlightJsService.highlight(item);
        });
    }

    onPageChanged(p) {
        console.log(p);
    }
}
