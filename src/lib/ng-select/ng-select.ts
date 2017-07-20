import { Component, OnInit, Input, Output, TemplateRef, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'ng-select',
    styleUrls: ['./ng-select.scss'],
    templateUrl: './ng-select.html',
    providers: [JsonPipe],
})
export class NgSelectComponent implements OnInit {

    _model: any;

    isOpened = false;

    @Input() multiple = false;
    @Input() source: any[];
    @Input() keyField: string;
    @Input() labelField: string;
    @Input() disabled: boolean;
    @Input() placeholder: string;

    @Input() itemTemplate: TemplateRef<any>;
    @Input() placeholderTemplate: TemplateRef<any>;

    @Output() itemSelected: EventEmitter<any> = new EventEmitter();
    @Output() modelChange: EventEmitter<any> = new EventEmitter();

    constructor(
        private jsonPipe:  JsonPipe,
        private elementRef: ElementRef,
    ) { }

    ngOnInit() {
        this.elementRef.nativeElement.classList.forEach((item) => {
            this.elementRef.nativeElement.querySelector('.ng-select').classList.add(item);
        });

        const m = this.model;
        this.source.forEach(element => {
            if(typeof(element) !== 'object') {
                throw new TypeError('The item of ng-select source MUST be object!');
            }

            if (this.keyField && m) {
                if (Array.isArray(m)) {
                    m.forEach((item: any) => {
                        if (item[this.keyField] === element[this.keyField]) {
                            element.__$isChecked = true;
                        }
                    });
                } else {
                    switch (typeof m) {
                        case 'object':
                            if (m[this.keyField] === element[this.keyField]) {
                                element.__$isChecked = true;
                            }
                            break;
                        default:
                            if (m === element[this.keyField]) {
                                element.__$isChecked = true;
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

    _getItemLabel(item: any): string {
        if (typeof (item) === 'object') {
            return this.labelField ? item[this.labelField] : this.jsonPipe.transform(item);
        } else {
            return item;
        }
    }

    _selectItem(item: any) {
        if (!this.multiple) {
            this.source.forEach(element => {
                element.__$isChecked = false;
            });
            item.__$isChecked = true;
            this._trigger();
        } else {
            item.__$isChecked = !item.__$isChecked;
        }

        this.itemSelected.emit(item);
        this.model = this._getModel();
    }

    _removeItem(item: any) {
        item.__$isChecked = false;
        this.model = this._getModel();
    }

    _getModel(): any {
        const selectedItems = this._getSelectedItems();
        if (this.multiple) {
            return selectedItems;
        } else {
            if (selectedItems.length > 0) {
                return selectedItems[0];
            }
        }
    }

    _getSelectedItems(): any[] {
        const result: any[] = [];
        for (let item of this.source) {
            if (item.__$isChecked) {
                result.push(item);
            }
        }
        return result;
    }

    _trigger() {
        if (this.disabled) {
            return;
        }

        this.isOpened = !this.isOpened;
        if (this.isOpened) {
            const input = this.elementRef.nativeElement.querySelector('.form-control');
            this.elementRef.nativeElement.querySelector('.ng-select-content').style.width = input.clientWidth + 'px';
        }
    }

    _close() {
        this.isOpened = false;
    }

    @HostListener('document:click')
    _handleGlobalEvent() {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this._close();
        }
    }
}
