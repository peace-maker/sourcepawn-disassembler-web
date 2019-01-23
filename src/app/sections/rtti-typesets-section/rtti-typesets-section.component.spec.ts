import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RttiTypesetsSectionComponent } from './rtti-typesets-section.component';

describe('RttiTypesetsSectionComponent', () => {
  let component: RttiTypesetsSectionComponent;
  let fixture: ComponentFixture<RttiTypesetsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RttiTypesetsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RttiTypesetsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
