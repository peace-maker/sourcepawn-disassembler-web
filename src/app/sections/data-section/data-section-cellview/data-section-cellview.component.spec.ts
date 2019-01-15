import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSectionCellviewComponent } from './data-section-cellview.component';

describe('DataSectionCellviewComponent', () => {
  let component: DataSectionCellviewComponent;
  let fixture: ComponentFixture<DataSectionCellviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSectionCellviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSectionCellviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
