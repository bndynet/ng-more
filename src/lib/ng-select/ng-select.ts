import { Component, OnInit, Input, Output, TemplateRef, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng-select',
    // styleUrls: ['./ng-select.scss'],
    templateUrl: './ng-select.html',
})
export class NgSelect implements OnInit {

    _model: any;

    @Input() multiple: boolean = false;
    @Input() source: any[];
    @Input() keyField: string;
    @Input() labelField: string;
    @Input() disabled: boolean;
    @Input() placeholder: string;

    @Input() itemTemplate: TemplateRef<any>;
    @Input() placeholderTemplate: TemplateRef<any>;

    @Output() itemSelected: EventEmitter<any> = new EventEmitter();
    @Output() modelChange: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
        const m = this.model;
        this.source.forEach(element => {
            if (this.keyField && m) {
                if (Array.isArray(m)) {
                    m.forEach((item: any) => {
                        if (item[this.keyField] == element[this.keyField]) {
                            element.__isChecked = true;
                        }
                    })
                }
                else {
                    switch (typeof m) {
                        case 'object':
                            if (m[this.keyField] == element[this.keyField]) {
                                element.__isChecked = true;
                            }
                            break;
                        default:
                            if(m == element[this.keyField]) {
                                element.__isChecked = true;
                                this.model = element;
                            }
                        break;
                    }
                }
            }
        });
    }

    @Input()
    get model(): any {
        return this._model;
    }

    set model(v: any) {
        if (v !== this._model) {
            this._model = v;
            this.modelChange.emit(this._model);
        }
    }

    selectItem(item: any) {
        if (!this.multiple) {
            this.source.forEach(element => {
                element.__isChecked = false;
            });
            item.__isChecked = true;
        }
        else {
            item.__isChecked = !item.__isChecked;
        }

        this.itemSelected.emit(item);
        this.model = this.getModel();
    }

    removeItem(item: any) {
        item.__isChecked = false;
        this.model = this.getModel();
    }

    getModel(): any {
        const selectedItems = this.getSelectedItems();
        if (this.multiple) {
            return selectedItems;
        }
        else {
            if (selectedItems.length > 0)
                return selectedItems[0];
        }
    }

    getSelectedItems(): any[] {
        const result: any[] = [];
        for (let item of this.source) {
            if (item.__isChecked) {
                result.push(item);
            }
        }
        return result;
    }
}
