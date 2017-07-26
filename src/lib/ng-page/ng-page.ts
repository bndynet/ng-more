import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng-page',
    templateUrl: './ng-page.html',
    styleUrls: ['./ng-page.scss'],
})
export class NgPageComponent implements OnInit {
    _page = 1;
    _pageCount = 0;
    _pageSize = 10;
    _itemCount = 0;

    @Output() modelChange: EventEmitter<number> = new EventEmitter();
    @Output() pageSizeChange: EventEmitter<number> = new EventEmitter();
    @Output() itemCountChange: EventEmitter<number> = new EventEmitter();
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();

    ngOnInit() {
        this._init();
    }

    @Input()
    get model() {
        return this._page;
    }
    set model(v: number) {
        if (v !== this._page) {
            this._page = v;
            this.modelChange.emit(this._page);
        }
    }

    @Input()
    get pageSize() {
        return this._pageSize;
    }
    set pageSize(v: number) {
        if (v <= 0) {
            v = 1;
        }

        if (v !== this._pageSize) {
            this._pageSize = v;
            this._init();
            this.pageSizeChange.emit(this._pageSize);
        }
    }

    @Input()
    get itemCount() {
        return this._itemCount;
    }
    set itemCount(v: number) {
        if (v !== this._itemCount) {
            this._itemCount = v;
            this._init();
            this.itemCountChange.emit(this._itemCount);
        }
    }

    _changePage(p: number) {
        if (p < 1) {
            p = 1;
        }
        if (p > this._pageCount) {
            p = this._pageCount;
        }

        if (p !== this.model) {
            this.model = p;
            this.pageChanged.emit(this._page);
        }
    }

    _getPageNumbers(): number[] {
        let result: number[] = [];
        if (this._pageCount <= 10) {
            for (let i = 1; i <= this._pageCount; i++) {
                result.push(i);
            }
        } else {
            let start = this._page - 4;
            let end = this._page + 4;

            if (this._page <= 5) {
                start = 1;
                end = 9;
            }

            if (this._page >= this._pageCount - 5) {
                start = this._pageCount - 8;
                end = this._pageCount;
            }

            for (let i = start; i <= end; i++) {
                result.push(i);
            }

            if (start > 1) {
                if (start > 2) {
                    result.splice(0, 0, -1);
                }
                result.splice(0, 0, 1);
            }

            if (end < this._pageCount) {
                if (end < this._pageCount - 1) {
                    result.push(-1);
                }
                result.push(this._pageCount);
            }
        }
        return result;
    }

    _init() {
        this._pageCount = Math.ceil(this.itemCount / this.pageSize);
    }
}
