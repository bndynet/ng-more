import { Component, AfterViewInit } from '@angular/core';

// import { HighlightJsService } from 'angular2-highlight-js';
// import * as he from 'he/he.js';

@Component({
    selector: 'ng-color-main',
    templateUrl: './main.component.html',
})
export class NgColorMainComponent implements AfterViewInit {

    selectedResult: any;
    data: any[];

    constructor() {
        this.selectedResult = { id: 3 };
        this.data = [
            { id: 1, color: '#ffffff', label: 'White' },
            { id: 2, color: '#ff0000', label: 'Red' },
            { id: 3, color: '#00ff00', label: 'Green' },
            { id: 4, color: '#0000ff', label: 'Blue' },
        ];
    }

    ngAfterViewInit() {

    }
}
