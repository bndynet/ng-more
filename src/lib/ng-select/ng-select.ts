import { Component, OnInit, Input, Output, TemplateRef, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng-select',
    // styleUrls: ['./ng-select.scss'],
    templateUrl: './ng-select.html',
})
export class NgSelect implements OnInit {

    @Input() @Output() multiple: boolean = false;
    @Input() source: any[];
    @Input() keyField: string;
    @Input() labelField: string;
    @Input() disabled: boolean;
    @Input() itemTemplate: TemplateRef<any>;

    @Output() itemSelected: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
        this.source.forEach(element => {
            element.isChecked = false;
        });
    }

    selectItem(item: any) {
        if (!this.multiple) {
            this.source.forEach(element => {
                element.isChecked = false;
            });
        }
        item.isChecked = true;

        this.itemSelected.emit(item);
    }

    removeItem(item: any) {
        item.isChecked = false;
    }

    getSelectedItems(): any[] {
        const result: any[] = [];
        for (let item of this.source) {
            if (item.isChecked) {
                result.push(item);
            }
        }
        return result;
    }
}
