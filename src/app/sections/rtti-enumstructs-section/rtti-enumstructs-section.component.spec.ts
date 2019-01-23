import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RttiEnumstructsSectionComponent } from './rtti-enumstructs-section.component';

describe('RttiEnumstructsSectionComponent', () => {
  let component: RttiEnumstructsSectionComponent;
  let fixture: ComponentFixture<RttiEnumstructsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RttiEnumstructsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RttiEnumstructsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
