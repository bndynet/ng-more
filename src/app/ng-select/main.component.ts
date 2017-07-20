import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-select-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class NgSelectMainComponent implements OnInit {
  data: any[];
  selectedResult: any;
  isMultiple = false;

  data1: string[];
  selectedData1: string;

  constructor() {
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
  }

  ngOnInit() {
  }

  onItemSelected(item) {
    console.log(item);
  }
}
