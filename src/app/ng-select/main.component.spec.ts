import { TestBed } from '@angular/core/testing';

import { NgSelectMainComponent } from './main.component';

describe('NgSelectMain Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [NgSelectMainComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(NgSelectMainComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('ng-select Works!');
  });

});
