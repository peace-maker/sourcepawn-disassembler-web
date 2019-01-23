import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownSectionComponent } from './unknown-section.component';

describe('UnknownSectionComponent', () => {
  let component: UnknownSectionComponent;
  let fixture: ComponentFixture<UnknownSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
