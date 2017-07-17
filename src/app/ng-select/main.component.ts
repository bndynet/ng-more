import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-select-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class NgSelectMainComponent implements OnInit {
  data: any[];
  selectedResult: any;
  isMultiple: boolean = false;

  constructor() {
    this.selectedResult = { key: 3 };
    this.data = [
      { key: 1, name: 'Option #1', iconClass: 'glyphicon glyphicon-lock' },
      { key: 2, name: 'Option #2', iconClass: 'glyphicon glyphicon-tag' },
      { key: 3, name: 'Option #3', iconClass: 'glyphicon glyphicon-bookmark' },
      { key: 4, name: 'Option #4', iconClass: 'glyphicon glyphicon-circle-arrow-left' },
      { key: 5, name: 'Option #5', iconClass: 'glyphicon glyphicon-thumbs-up' },
    ]; 
  }

  ngOnInit() {
  }

  onItemSelected(item) {
    console.debug(item);
  }
}
