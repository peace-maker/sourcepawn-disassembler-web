import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RttiClassdefsSectionComponent } from './rtti-classdefs-section.component';

describe('RttiClassdefsSectionComponent', () => {
  let component: RttiClassdefsSectionComponent;
  let fixture: ComponentFixture<RttiClassdefsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RttiClassdefsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RttiClassdefsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
