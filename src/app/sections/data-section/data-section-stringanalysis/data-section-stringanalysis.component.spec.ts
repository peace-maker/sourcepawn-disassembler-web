import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSectionStringanalysisComponent } from './data-section-stringanalysis.component';

describe('DataSectionStringanalysisComponent', () => {
  let component: DataSectionStringanalysisComponent;
  let fixture: ComponentFixture<DataSectionStringanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSectionStringanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSectionStringanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
