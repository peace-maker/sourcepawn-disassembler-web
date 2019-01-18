import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RttiNativesSectionComponent } from './rtti-natives-section.component';

describe('RttiNativesSectionComponent', () => {
  let component: RttiNativesSectionComponent;
  let fixture: ComponentFixture<RttiNativesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RttiNativesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RttiNativesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
