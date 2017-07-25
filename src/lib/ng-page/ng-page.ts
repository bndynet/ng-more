import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng-page',
    templateUrl: './ng-page.html',
    styleUrls: ['./ng-page.scss'],
})
export class NgPageComponent implements OnInit {
    page: number = 1;
    pageCount: number = 0;

    @Input() pageSize: number = 10;
    @Input() itemCount: number = 0;

    @Output() modelChange: EventEmitter<number> = new EventEmitter();
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();

    ngOnInit() {
        this.pageCount = Math.ceil(this.itemCount / this.pageSize);
    }

    @Input()
    get model() {
        return this.page;
    }

    set model(v: number) {
        if (v !== this.page) {
            this.page = v;
            this.modelChange.emit(this.page);
        }
    }

    changePage(p: number) {
        if (p < 1) {
            p = 1;
        }
        if (p > this.pageCount) {
            p = this.pageCount;
        }

        this.model = p;
        this.pageChanged.emit(this.page);
    }

    getPageNumbers(): number[] {
        let result: number[] = [];
        if (this.pageCount <= 10) {
            for (let i = 1; i <= this.pageCount; i++) {
                result.push(i);
            }
        } else {
            let start = this.page - 4;
            let end = this.page + 4;

            if (this.page <= 5) {
                start = 1
                end = 9;
            }

            if (this.page >= this.pageCount - 5) {
                start = this.pageCount - 8;
                end = this.pageCount;
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

            if (end < this.pageCount) {
                if (end < this.pageCount - 1) {
                    result.push(-1);
                }
                result.push(this.pageCount);
            }
        }
        return result;
    }
}
