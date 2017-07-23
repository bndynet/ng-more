import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'ng-color',
    styleUrls: ['./ng-color.scss'],
    templateUrl: './ng-color.html',
})
export class NgColorComponent implements OnInit {

    _model: object;

    isOpened = false;

    @Input() source: any[];
    @Input() keyField: string;
    @Input() valueField: string;
    @Input() labelField: string;
    @Input() disabled: boolean;

    @Output() modelChange: EventEmitter<any> = new EventEmitter();

    constructor(
        private elementRef: ElementRef,
    ) {

    }

    ngOnInit() {
        const m = this.model;
        this.source.forEach((item) => {
            if (item[this.keyField] === m[this.keyField]) {
                this.model = item;
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

    _getItemColor(item: any): string {
        if (item) {
            return item[this.valueField];
        }
        return '#ffffff';
    }

    _getItemLabel(item: any): string {
        if (item) {
            return item[this.labelField];
        }
        return '';
    }

    _selectItem(item: any) {
        this.model = item;
        this._trigger();
    }

    _trigger() {
        if (this.disabled) {
            return;
        }

        this.isOpened = !this.isOpened;
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
