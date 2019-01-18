import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RttiFieldsSectionComponent } from './rtti-fields-section.component';

describe('RttiFieldsSectionComponent', () => {
  let component: RttiFieldsSectionComponent;
  let fixture: ComponentFixture<RttiFieldsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RttiFieldsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RttiFieldsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
