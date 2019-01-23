import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RttiTypedefsSectionComponent } from './rtti-typedefs-section.component';

describe('RttiTypedefsSectionComponent', () => {
  let component: RttiTypedefsSectionComponent;
  let fixture: ComponentFixture<RttiTypedefsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RttiTypedefsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RttiTypedefsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
