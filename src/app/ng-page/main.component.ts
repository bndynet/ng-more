import { Component, AfterViewInit, ElementRef } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';
import * as he from 'he/he.js';

@Component({
    selector: 'ng-color-main',
    templateUrl: './main.component.html',
})
export class NgPageMainComponent implements AfterViewInit {

    pageSize = 100;
    page = 3;

    codeHtml: string;
    codeTypeScript: string;

    constructor(
        private el: ElementRef,
        private highlightJsService: HighlightJsService,
    ) {
        this.codeTypeScript = `
        `;
        this.codeHtml = he.encode(`
`);
    }

    ngAfterViewInit() {
        this.el.nativeElement.querySelectorAll('.code').forEach((item) => {
            this.highlightJsService.highlight(item);
        });
    }

    onPageChanged(p) {
        console.debug(p);
    }
}
