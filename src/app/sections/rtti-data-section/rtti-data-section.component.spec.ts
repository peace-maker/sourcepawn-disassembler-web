import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RttiDataSectionComponent } from './rtti-data-section.component';

describe('RttiDataSectionComponent', () => {
  let component: RttiDataSectionComponent;
  let fixture: ComponentFixture<RttiDataSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RttiDataSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RttiDataSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
