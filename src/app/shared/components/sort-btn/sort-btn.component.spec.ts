import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBtnComponent } from './sort-btn.component';

describe('SortBtnComponent', () => {
  let component: SortBtnComponent;
  let fixture: ComponentFixture<SortBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SortBtnComponent]
    });
    fixture = TestBed.createComponent(SortBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
