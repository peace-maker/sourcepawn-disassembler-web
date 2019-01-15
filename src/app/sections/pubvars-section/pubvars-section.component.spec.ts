import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubvarsSectionComponent } from './pubvars-section.component';

describe('PubvarsSectionComponent', () => {
  let component: PubvarsSectionComponent;
  let fixture: ComponentFixture<PubvarsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubvarsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubvarsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
