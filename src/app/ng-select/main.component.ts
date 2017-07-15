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
    this.selectedResult = "Default Selected Result";
    this.data = [
      { key: 1, name: 'Option #1' },
      { key: 2, name: 'Option #2' },
      { key: 3, name: 'Option #3' },
      { key: 4, name: 'Option #4' },
      { key: 5, name: 'Option #5' },
    ]; 
  }

  ngOnInit() {
  }

  onItemSelected(item) {
    console.debug(item);
  }
}
