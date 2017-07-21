import { Component, ElementRef, AfterViewInit } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';
import * as he from 'he/he.js';

@Component({
  selector: 'ng-select-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class NgSelectMainComponent implements AfterViewInit {
  data: any[];
  selectedResult: any;
  isMultiple = false;

  data1: string[];
  selectedData1: string;

  codeHtml: string;
  codeTypeScript: string;

  constructor(
    private el: ElementRef,
    private highlightJsService: HighlightJsService,
  ) {
    this.selectedResult = { key: 3 };
    this.data = [
      { key: 1, name: 'Option #1', iconClass: 'glyphicon glyphicon-lock' },
      { key: 2, name: 'Option #2', iconClass: 'glyphicon glyphicon-tag' },
      { key: 3, name: 'Option #3', iconClass: 'glyphicon glyphicon-bookmark' },
      { key: 4, name: 'Option #4', iconClass: 'glyphicon glyphicon-circle-arrow-left' },
      { key: 5, name: 'Option #5', iconClass: 'glyphicon glyphicon-thumbs-up' },
    ];

    this.data1 = ['Option #1', 'Option #2', 'Option #3'];
    this.selectedData1 = 'Option #2';

    this.codeTypeScript = `
    this.selectedResult = { key: 3 };
    this.data = [
      { key: 1, name: 'Option #1', iconClass: 'glyphicon glyphicon-lock' },
      { key: 2, name: 'Option #2', iconClass: 'glyphicon glyphicon-tag' },
      { key: 3, name: 'Option #3', iconClass: 'glyphicon glyphicon-bookmark' },
      { key: 4, name: 'Option #4', iconClass: 'glyphicon glyphicon-circle-arrow-left' },
      { key: 5, name: 'Option #5', iconClass: 'glyphicon glyphicon-thumbs-up' },
    ];
    `;
    this.codeHtml = he.encode(`
<label>Simple</label>
<ng-select keyField="key" labelField="name" class="with-radius" placeholder="Select..." 
  [(model)]="selectedResult" [disabled]="isDisabled"
  [source]="data" [multiple]="isMultiple" (itemSelected)="onItemSelected($event)"></ng-select>

<label>Custom Template</label>
<ng-select keyField="key" labelField="name" class="with-radius" [(model)]="selectedResult" 
  [disabled]="isDisabled" [source]="data" [multiple]="isMultiple" 
  [itemTemplate]="selectItem" [placeholderTemplate]="placeholder" 
  (itemSelected)="onItemSelected($event)"></ng-select>

<ng-template #placeholder>
  <div style="padding: 4px;">
    <i class="glyphicon glyphicon-console"></i> Define your placeholder here...
  </div>
</ng-template>
<ng-template #selectItem let-item="item">
  <div class="clearfix">
    <div class="pull-left">
      <i class="{{item.iconClass}}"></i> {{item.name}}
    </div>
    <div class="pull-right">
      <small>{{item.name}}</small>
    </div>
  </div>
</ng-template>
`);
  }

  ngAfterViewInit() {
    this.el.nativeElement.querySelectorAll('.code').forEach((item) => {
      this.highlightJsService.highlight(item);
    });
  }

  onItemSelected(item) {
    console.log(item);
  }
}
