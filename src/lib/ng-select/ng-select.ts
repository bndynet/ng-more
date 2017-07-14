import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ng-select',
    styleUrls: ['./ng-select.scss'],
    templateUrl: './ng-select.html',
})
export class NgSelect implements OnInit {

    @Input() source: any[];
    @Input() keyField: string;
    @Input() labelField: string;
    @Input() disabled: boolean;

    constructor() { }

    ngOnInit() {
        this.source.forEach(element => {
            element.isChecked = false;
        });
    }
    
    selectItem(item: any) {
        this.source.forEach(element => {
            element.isChecked = false;
        });
        item.isChecked = true;
    }

    getSelectedItems(): any[] {
        const result: any[] = [];
        for(let item of this.source){
            if(item.isChecked) {
                result.push(item);
            }
        }
        return result;
    }
}
