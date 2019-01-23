import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RttiEnumstructFieldsSectionComponent } from './rtti-enumstruct-fields-section.component';

describe('RttiEnumstructFieldsSectionComponent', () => {
  let component: RttiEnumstructFieldsSectionComponent;
  let fixture: ComponentFixture<RttiEnumstructFieldsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RttiEnumstructFieldsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RttiEnumstructFieldsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
