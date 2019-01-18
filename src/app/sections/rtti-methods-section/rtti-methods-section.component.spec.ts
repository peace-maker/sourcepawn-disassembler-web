import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RttiMethodsSectionComponent } from './rtti-methods-section.component';

describe('RttiMethodsSectionComponent', () => {
  let component: RttiMethodsSectionComponent;
  let fixture: ComponentFixture<RttiMethodsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RttiMethodsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RttiMethodsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
