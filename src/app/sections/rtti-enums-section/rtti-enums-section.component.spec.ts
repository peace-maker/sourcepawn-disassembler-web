import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RttiEnumsSectionComponent } from './rtti-enums-section.component';

describe('RttiEnumsSectionComponent', () => {
  let component: RttiEnumsSectionComponent;
  let fixture: ComponentFixture<RttiEnumsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RttiEnumsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RttiEnumsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
